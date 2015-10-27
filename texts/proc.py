# -*- coding:utf-8 -*-
import logging,  datetime

from . import models as text_models

def extra_var(request):
    c = {
        'settings': dict(
            text_models.TextSettings.objects.values_list('name', 'val')),
        'now_date': datetime.datetime.now(),
    }
    try:
        page = text_models.Text.objects.get(slug=request.path) 
    except text_models.Text.DoesNotExist:
        page = {
            'title': 'Пустая страница',
            'desc': 'заполни меня указав в слаге "{}"'.format(request.path)
        }
    c['page'] = page
    return c
