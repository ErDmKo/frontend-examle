# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0003_event_on_top'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='on_top',
            field=models.BooleanField(default=False, verbose_name='Вывод на главную'),
        ),
    ]
