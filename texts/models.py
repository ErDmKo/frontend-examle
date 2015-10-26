# -*- coding:utf-8 -*-
from __future__ import unicode_literals

import datetime, logging

from django.db import models
from django.core.urlresolvers import reverse

class SeoFieldsModel(models.Model):
    seo_title = models.CharField(
        max_length=255, default='', null=True,
        verbose_name='ÐÐ°Ð³Ð¾Ð»Ð¾Ð²Ð¾Ðº ÑÑÑÐ°Ð½Ð¸ÑÑ', blank=True)
    seo_keyw = models.CharField(
        max_length=255, null=True, default='', verbose_name='ÐÐ»ÑÑÐµÐ²ÑÐµ ÑÐ»Ð¾Ð²Ð°',
        blank=True)
    seo_desc = models.TextField(
        verbose_name='ÐÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ', null=True, default='', blank=True)

    class Mata:     # Ð¾Ð¿ÐµÑÐ°ÑÐºÐ°!!
        abstract = True

class TextSettings(models.Model):
    title = models.CharField(max_length=50, verbose_name='ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ')
    name = models.SlugField(max_length=16, verbose_name='ÐÐ¾Ð´', unique=True)
    val = models.TextField(max_length=1000, verbose_name='ÐÐ½Ð°ÑÐµÐ½Ð¸Ðµ')
    file = models.FileField(upload_to='settings', null=True, verbose_name='Ð¤Ð°Ð¹Ð»', blank=True)

    def __unicode__(self):
        return self.title

    class Meta:
        verbose_name = 'ÑÐµÐºÑÑÐ¾Ð²Ð°Ñ Ð¿ÐµÑÐµÐ¼ÐµÐ½Ð½Ð°Ñ'
        verbose_name_plural = 'ÑÐµÐºÑÑÐ¾Ð²ÑÐµ Ð¿ÐµÑÐµÐ¼ÐµÐ½Ð½ÑÐµ'

class Text(SeoFieldsModel):
    slug = models.CharField(max_length=200,
        unique=True, default='0', verbose_name='Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð² url')
    title = models.CharField(max_length=250, verbose_name='ÐÐ°Ð³Ð¾Ð»Ð¾Ð²Ð¾Ðº')
    desc = models.TextField(verbose_name='ÐÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ')
    date = models.DateField(
        default=datetime.date.today, verbose_name='ÐÐ°ÑÐ° Ð¿ÑÐ±Ð»Ð¸ÐºÐ°ÑÐ¸Ð¸', null=True,
        blank=True)

    def __unicode__(self):
        return self.title

    class Meta:
        ordering = ['-pk']
        verbose_name = 'Ð¢ÐµÐºÑÑ'
        verbose_name_plural = 'Ð¢ÐµÐºÑÑÑ'

