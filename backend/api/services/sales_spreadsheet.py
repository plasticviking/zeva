import base64
import binascii
import logging
import pickle
from datetime import datetime
from pickle import PickleError

import xlrd
import xlwt
from xlrd import XLRDError, XLDateError

from api.models.organization import Organization
from api.models.record_of_sale import RecordOfSale
from api.models.vehicle import Vehicle
from api.models.vehicle_make_organization import VehicleMakeOrganization
from api.models.vin_statuses import VINStatuses

logger = logging.getLogger('zeva.sales_spreadsheet')

MAGIC = [0x00, 0xd3, 0xc0, 0xde]


def create_sales_spreadsheet(organization):
    logger.info('Starting to build spreadsheet for {org}'.format(org=organization.name))
    sheet_count = 0

    make_assoc = VehicleMakeOrganization.objects.filter(organization=organization)

    bold = xlwt.easyxf('font: name Times New Roman, bold on;')
    locked = xlwt.easyxf("protection: cell_locked true;")
    editable = xlwt.easyxf("protection: cell_locked false;")
    editable_date = xlwt.easyxf("protection: cell_locked false;", num_format_str='yyyy/mm/dd')

    wb = xlwt.Workbook('{} Sales Recording'.format(organization.name))
    wb.protect = True

    descriptor = {
        'version': 1,
        'create_time': datetime.utcnow().timestamp(),
        'organization_id': organization.id,
        'sheets': []
    }

    for ma in make_assoc:
        make = ma.vehicle_make
        logger.info('{org} supplies {name}'.format(org=organization.name,
                                                   name=make.name))

        vehicles = Vehicle.objects.filter(make=make)
        for veh in vehicles:
            logger.info('{make} has model {model}'.format(make=make.name,
                                                          model=veh.model_name))

            sheet_name = '{} - {}'.format(make.name, veh.model_name)
            ws = wb.add_sheet(sheet_name)
            ws.protect = True
            descriptor['sheets'].append({
                'index': sheet_count,
                'name': sheet_name,
                'vehicle_id': veh.id,
            })

            sheet_count += 1
            row = 0
            ws.write(row, 0, 'Recording sales for {year} {make} {model}'.format(year=veh.model_year.name,
                                                                                make=veh.make.name,
                                                                                model=veh.model_name), style=bold)
            row += 1

            ws.write(row, 0, 'Record each individual sale for this model in the spaces below. VIN and Sales Date '
                             'fields are required.')

            row += 2

            ws.write(row, 0, 'Reference Number', style=bold)
            ws.write(row, 1, 'VIN', style=bold)
            ws.write(row, 2, 'Sales Date', style=bold)

            row += 1

            ROW_MAX = 65535

            while row < ROW_MAX:
                ref = 'Assigned'
                ws.write(row, 0, '{ref}'.format(ref=ref), style=locked)
                ws.write(row, 1, '', style=editable)
                ws.write(row, 2, None, style=editable_date)
                row += 1

    descriptor_bytes = [0x00, 0xd3, 0xc0, 0xde]
    descriptor_bytes.extend(pickle.dumps(descriptor))
    encoded_descriptor = base64.standard_b64encode(bytes(descriptor_bytes))

    ws = wb.add_sheet('ZEVA Internal Use')
    ws.write(0, 0, encoded_descriptor.decode('ascii'), style=locked)

    logger.info('Done building spreadsheet. {} sheets created'.format(sheet_count))
    logger.info('Descriptor {}'.format(descriptor))
    logger.info('Encoded {}'.format(encoded_descriptor.decode('ascii')))

    wb.save('test.xls')


def ingest_sales_spreadsheet(file_name):
    logger.info('Opening file {}'.format(file_name))

    wb = xlrd.open_workbook(file_name)

    validation_problems = []

    try:
        metadata_sheet = wb.sheet_by_name('ZEVA Internal Use')
        row = metadata_sheet.row(0)
        encoded_descriptor = row[0].value
        descriptor_bytes = base64.standard_b64decode(encoded_descriptor)
        magic_verification = descriptor_bytes[0:4]

        if bytes(magic_verification) == bytes(MAGIC):
            logger.info('Good Magic')
        else:
            validation_problems.append('Bad Magic')
            logger.critical('Unable to parse. Validation problems: {}'.format(validation_problems))
            return

        descriptor = pickle.loads(descriptor_bytes[4:])
        logger.info('Read descriptor: {}'.format(descriptor))

    except XLRDError:
        validation_problems.append('No metadata sheet')
        logger.critical('Unable to parse. Validation problems: {}'.format(validation_problems))
        return
    except IndexError:
        validation_problems.append('Expected values not in metadata sheet')
        logger.critical('Unable to parse. Validation problems: {}'.format(validation_problems))
        return
    except binascii.Error:
        validation_problems.append('Base64 decode failed')
        logger.critical('Unable to parse. Validation problems: {}'.format(validation_problems))
        return
    except PickleError:
        validation_problems.append('Descriptor unpickling error')
        logger.critical('Unable to parse. Validation problems: {}'.format(validation_problems))
        return

    org = Organization.objects.get(id=descriptor['organization_id'])

    for input_sheet in descriptor['sheets']:
        try:
            sheet = wb.sheet_by_name(input_sheet['name'])
        except XLRDError:
            logger.info('Sheet {} missing'.format(input_sheet))
            validation_problems.append('Expected to find a sheet called {}, and it is not present. Skipping it.')
            continue

        logger.info('Reading sheet {}'.format(input_sheet['name']))

        START_ROW = 4
        ROW_MAX = 65535
        row = START_ROW

        while row < ROW_MAX:
            row_contents = sheet.row(row)
            vin = row_contents[1].value
            date = row_contents[2].value
            if len(vin) > 0:
                logger.info('Found VIN {}'.format(vin))
                if date == '':
                    validation_problems.append('VIN {} has no corresponding sale date'.format(vin))
                else:
                    try:
                        parsed_date = xlrd.xldate.xldate_as_datetime(date, wb.datemode)
                        logger.debug('I interpret the Excel date string {} as {}'.format(date, parsed_date))
                    except XLDateError:
                        validation_problems.append('date {} insensible'.format(date))

                    if RecordOfSale.objects.filter(vin=vin, organization=org).exists():
                        validation_problems.append(
                            'VIN {} has previously been recorded (but will be entered anyway)'.format(vin))

                    ros = RecordOfSale.objects.create(
                        organization=org,
                        vehicle=Vehicle.objects.get(id=input_sheet['vehicle_id']),
                        vin=vin,
                        sale_date=parsed_date,
                        reference_number=None
                    )
                    ros.save()
                    logger.info('Recorded sale {}'.format(vin))

            row += 1

    if len(validation_problems) > 0:
        logger.info('Noncritical validation errors encountered: {}'.format(validation_problems))

    logger.info('Done processing file {}'.format(file_name))