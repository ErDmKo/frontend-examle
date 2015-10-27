# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_auto_20151027_1728'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='on_top',
            field=models.BooleanField(default=False, verbose_name='Отображать в топе'),
        ),
    ]
