# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='event',
            options={'verbose_name': 'Мероприятие', 'ordering': ['-pk'], 'verbose_name_plural': 'Мероприятия'},
        ),
        migrations.RenameField(
            model_name='event',
            old_name='sort_desc',
            new_name='short_desc',
        ),
    ]
