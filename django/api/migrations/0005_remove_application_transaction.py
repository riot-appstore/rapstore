# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-03-28 13:24
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20180327_1502'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='application',
            name='transaction',
        ),
    ]
