# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2015-12-06 15:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0009_auto_20151206_1701'),
    ]

    operations = [
        migrations.AlterField(
            model_name='text',
            name='slug',
            field=models.CharField(default='0', max_length=200, unique=True, verbose_name='название в url'),
        ),
    ]