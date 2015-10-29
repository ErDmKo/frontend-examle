# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0004_auto_20151029_0757'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='related_events',
            field=models.ManyToManyField(related_name='_related_events_+', blank=True, to='events.Event', verbose_name='Связанные события', null=True),
        ),
    ]
