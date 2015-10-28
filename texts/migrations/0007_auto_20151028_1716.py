# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0006_auto_20151028_1659'),
    ]

    operations = [
        migrations.AlterField(
            model_name='text',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата публикации'),
        ),
    ]
