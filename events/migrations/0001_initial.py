# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('text_ptr', models.OneToOneField(serialize=False, primary_key=True, parent_link=True, to='texts.Text', auto_created=True)),
                ('sort_desc', models.CharField(max_length=255, verbose_name='Короткое описание')),
                ('image', models.ImageField(upload_to='events_headers', verbose_name='Изображение для списка')),
            ],
            bases=('texts.text',),
        ),
    ]
