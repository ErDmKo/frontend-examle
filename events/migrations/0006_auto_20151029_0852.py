# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0005_event_related_events'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='related_events',
            field=models.ManyToManyField(related_name='_related_events_+', to='events.Event', blank=True, verbose_name='Связанные события'),
        ),
    ]
