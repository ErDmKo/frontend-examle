# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0005_feedback'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='feedback',
            options={'ordering': ['-pk'], 'verbose_name': 'Отзыв', 'verbose_name_plural': 'Отзывы'},
        ),
        migrations.AlterField(
            model_name='feedback',
            name='comment',
            field=models.TextField(verbose_name='Сообщение', blank=True),
        ),
        migrations.AlterField(
            model_name='feedback',
            name='email',
            field=models.EmailField(max_length=250, verbose_name='E-mail', blank=True),
        ),
    ]
