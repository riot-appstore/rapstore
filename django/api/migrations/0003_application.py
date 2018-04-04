# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-03-27 14:53
from __future__ import unicode_literals

from django.conf import settings
import django.core.files.storage
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0002_auto_20180327_1436'),
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('description', models.TextField(max_length=255)),
                ('licences', models.CharField(max_length=255)),
                ('project_page', models.URLField(max_length=255)),
                ('app_tarball', models.FileField(blank=True, storage=django.core.files.storage.FileSystemStorage(location='/apps'), upload_to='')),
                ('app_repo_url', models.URLField(blank=True, max_length=255)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('transaction', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Transaction')),
            ],
            options={
                'permissions': (('has_dev_perm', 'Has dev permissions'),),
            },
        ),
    ]