from enumfields.drf import EnumField, EnumSupportSerializerMixin
from rest_framework.serializers import ModelSerializer, \
    SerializerMethodField

from api.models.sales_submission import SalesSubmission
from api.models.sales_submission_statuses import SalesSubmissionStatuses
from api.serializers.organization import OrganizationSerializer
from api.serializers.record_of_sale import RecordOfSaleSerializer


class SalesSubmissionListSerializer(
    ModelSerializer, EnumSupportSerializerMixin):
    validation_status = EnumField(SalesSubmissionStatuses, read_only=True)
    organization = OrganizationSerializer(read_only=True)
    totals = SerializerMethodField()

    def get_totals(self, obj):
        return {
            'vins': obj.records.count()
        }

    class Meta:
        model = SalesSubmission
        fields = ('id', 'validation_status', 'organization', 'submission_date', 'submission_sequence',
                  'totals', 'submission_id')


class SalesSubmissionSerializer(ModelSerializer, EnumSupportSerializerMixin):
    validation_status = EnumField(SalesSubmissionStatuses, read_only=True)
    organization = OrganizationSerializer(read_only=True)
    records = RecordOfSaleSerializer(read_only=True, many=True)

    class Meta:
        model = SalesSubmission
        fields = ('id', 'validation_status', 'organization', 'submission_date', 'submission_sequence',
                  'records', 'submission_id')