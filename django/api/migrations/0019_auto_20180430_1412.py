# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-04-30 14:12
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_auto_20180425_1704'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='name',
            field=models.CharField(max_length=255, unique=True, validators=[django.core.validators.RegexValidator('^[\\w]*$', code='Invalid name', message='name must be alphanumeric')]),
        ),
    ]
