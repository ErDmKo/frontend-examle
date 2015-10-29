# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0006_auto_20151029_0852'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='event',
            options={'ordering': ['-ord'], 'verbose_name_plural': 'Мероприятия', 'verbose_name': 'Мероприятие'},
        ),
        migrations.AddField(
            model_name='event',
            name='ord',
            field=models.SmallIntegerField(default=50, verbose_name='Порядок'),
        ),
    ]
