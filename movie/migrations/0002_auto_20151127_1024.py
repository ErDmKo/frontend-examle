# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='show',
            options={'verbose_name_plural': 'Релизы', 'verbose_name': 'Релиз', 'ordering': ['ord']},
        ),
        migrations.AddField(
            model_name='show',
            name='ord',
            field=models.SmallIntegerField(verbose_name='Порядок', default=50),
        ),
        migrations.AddField(
            model_name='show',
            name='year',
            field=models.BigIntegerField(verbose_name='Год', default=2015),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='show',
            name='original_title',
            field=models.CharField(max_length=255, verbose_name='Оригинальное название'),
        ),
    ]
