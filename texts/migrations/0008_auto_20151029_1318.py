# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0007_auto_20151028_1716'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='phone',
            field=models.BigIntegerField(verbose_name='Телефoн'),
        ),
    ]
