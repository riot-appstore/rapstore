# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-04-18 15:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_auto_20180418_1331'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='download_count',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
