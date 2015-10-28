from django.db import models
from texts import models as texts_models 


class Event(texts_models.Text):
    on_top = models.BooleanField(
        default=False,
        verbose_name = 'Вывод на главную')
    short_desc = models.CharField(
        max_length=255,
        verbose_name='Короткое описание')
    image = models.ImageField(
        upload_to = 'events_headers',
        verbose_name='Изображение для списка')

    def __src__(self):
        return self.title

    class Meta:
        ordering = ['-pk']
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'
