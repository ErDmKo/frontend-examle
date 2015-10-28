# -*- coding:utf-8 -*-

import datetime, logging

from django.db import models
from django.core.urlresolvers import reverse

class SeoFieldsModel(models.Model):
    seo_title = models.CharField(
        max_length=255, default='', null=True,
        verbose_name='Заголовок страницы', blank=True)
    seo_keyw = models.CharField(
        max_length=255, null=True, default='', verbose_name='Ключевые слова',
        blank=True)
    seo_desc = models.TextField(
        verbose_name='Описание', null=True, default='', blank=True)

    class Mata:     # опечатка!!
        abstract = True

class TextSettings(models.Model):
    title = models.CharField(max_length=50, verbose_name='Название')
    name = models.SlugField(max_length=16, verbose_name='Код', unique=True)
    val = models.TextField(max_length=1000, verbose_name='Значение')
    file = models.FileField(upload_to='settings', null=True, verbose_name='Файл', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'текстовая переменная'
        verbose_name_plural = 'текстовые переменные'

class Text(SeoFieldsModel):
    slug = models.SlugField(max_length=200,
        unique=True, default='0', verbose_name='название в url')
    title = models.CharField(max_length=250, verbose_name='Заголовок')
    desc = models.TextField(verbose_name='Описание')
    date = models.DateField(
        default=datetime.date.today, verbose_name='Дата публикации', null=True,
        blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-pk']
        verbose_name = 'Текст'
        verbose_name_plural = 'Тексты'
