# Generated by Django 3.0.3 on 2020-02-26 04:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_recordofsale'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recordofsale',
            old_name='sale_id',
            new_name='reference_number',
        ),
        migrations.AlterUniqueTogether(
            name='recordofsale',
            unique_together=set(),
        ),
    ]