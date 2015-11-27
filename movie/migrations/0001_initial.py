# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0008_auto_20151029_1318'),
    ]

    operations = [
        migrations.CreateModel(
            name='Show',
            fields=[
                ('text_ptr', models.OneToOneField(parent_link=True, to='texts.Text', serialize=False, auto_created=True, primary_key=True)),
                ('on_top', models.BooleanField(verbose_name='Вывод на главную', default=False)),
                ('image', models.ImageField(verbose_name='Изображение для списка', upload_to='movie_headers')),
                ('genre', models.CharField(verbose_name='Жанр', max_length=255)),
                ('director', models.CharField(verbose_name='Режисер', max_length=255)),
                ('roles', models.TextField(verbose_name='Роли')),
                ('original_title', models.BigIntegerField(verbose_name='Год')),
                ('rating', models.FloatField(verbose_name='Рейтинг')),
                ('duration', models.BigIntegerField(verbose_name='Продолжительность в мин')),
                ('trailer', models.TextField(verbose_name='Ссылка на видео трейлера')),
            ],
            bases=('texts.text',),
        ),
    ]
