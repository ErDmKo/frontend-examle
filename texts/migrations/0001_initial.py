# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SeoFieldsModel',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('seo_title', models.CharField(blank=True, null=True, verbose_name='Заголовок страницы', max_length=255, default='')),
                ('seo_keyw', models.CharField(blank=True, null=True, verbose_name='Ключевые слова', max_length=255, default='')),
                ('seo_desc', models.TextField(blank=True, null=True, verbose_name='Описание', default='')),
            ],
        ),
        migrations.CreateModel(
            name='TextSettings',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=50, verbose_name='Название')),
                ('name', models.SlugField(max_length=16, unique=True, verbose_name='Код')),
                ('val', models.TextField(max_length=1000, verbose_name='Значение')),
                ('file', models.FileField(blank=True, null=True, upload_to='settings', verbose_name='Файл')),
            ],
            options={
                'verbose_name': 'текстовая переменная',
                'verbose_name_plural': 'текстовые переменные',
            },
        ),
        migrations.CreateModel(
            name='Text',
            fields=[
                ('seofieldsmodel_ptr', models.OneToOneField(auto_created=True, primary_key=True, parent_link=True, serialize=False, to='texts.SeoFieldsModel')),
                ('slug', models.CharField(max_length=200, unique=True, verbose_name='название в url', default='0')),
                ('title', models.CharField(max_length=250, verbose_name='Заголовок')),
                ('desc', models.TextField(verbose_name='Описание')),
                ('date', models.DateField(blank=True, null=True, verbose_name='Дата публикации', default=datetime.date.today)),
            ],
            options={
                'ordering': ['-pk'],
                'verbose_name': 'Текст',
                'verbose_name_plural': 'Тексты',
            },
            bases=('texts.seofieldsmodel',),
        ),
    ]
