# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0007_auto_20151028_1716'),
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('text_ptr', models.OneToOneField(primary_key=True, to='texts.Text', auto_created=True, serialize=False, parent_link=True)),
                ('on_top', models.BooleanField(verbose_name='Вывод на главную', default=False)),
                ('short_desc', models.CharField(verbose_name='Короткое описание', max_length=255)),
                ('image', models.ImageField(upload_to='events_headers', verbose_name='Изображение для списка')),
            ],
            options={
                'verbose_name_plural': 'Новости',
                'ordering': ['-pk'],
                'verbose_name': 'Новость',
            },
            bases=('texts.text',),
        ),
    ]
