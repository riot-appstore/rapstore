# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-03-29 08:44
from __future__ import unicode_literals

import django.core.files.storage
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_remove_application_transaction'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='app_tarball',
            field=models.FileField(storage=django.core.files.storage.FileSystemStorage(location='/code'), upload_to=''),
        ),
    ]
