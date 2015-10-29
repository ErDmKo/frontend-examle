# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0008_auto_20151029_1254'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='related_events',
            field=models.ManyToManyField(blank=True, verbose_name='Связанные события', to='events.Event'),
        ),
    ]
