# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-04-05 12:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_application_is_public'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='name',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
