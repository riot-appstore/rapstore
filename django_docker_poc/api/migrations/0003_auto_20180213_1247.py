# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-02-13 12:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_board_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='description',
            field=models.TextField(max_length=255),
        ),
        migrations.AlterField(
            model_name='module',
            name='description',
            field=models.TextField(max_length=255),
        ),
    ]
