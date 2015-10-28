# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='text',
            name='slug',
            field=models.SlugField(max_length=200, unique=True, default='0', verbose_name='название в url'),
        ),
    ]
