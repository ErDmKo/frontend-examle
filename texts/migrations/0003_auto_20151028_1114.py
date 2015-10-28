# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0002_auto_20151028_0759'),
    ]

    operations = [
        migrations.AlterField(
            model_name='text',
            name='date',
            field=models.DateField(verbose_name='Дата публикации', default=datetime.date.today),
        ),
    ]
