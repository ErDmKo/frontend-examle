# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import ckeditor_uploader.fields


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0003_auto_20151028_1114'),
    ]

    operations = [
        migrations.AlterField(
            model_name='text',
            name='desc',
            field=ckeditor_uploader.fields.RichTextUploadingField(verbose_name='Описание'),
        ),
    ]
