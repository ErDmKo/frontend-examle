# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0004_auto_20151028_1612'),
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('first_name', models.CharField(verbose_name='Имя', max_length=250)),
                ('phone', models.CharField(verbose_name='Телефoн', max_length=250)),
                ('email', models.EmailField(verbose_name='E-mail', max_length=250)),
                ('comment', models.TextField(verbose_name='Сообщение')),
            ],
            options={
                'verbose_name': 'Мероприятие',
                'verbose_name_plural': 'Мероприятия',
                'ordering': ['-pk'],
            },
        ),
    ]
