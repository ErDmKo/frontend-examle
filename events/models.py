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
    related_events = models.ManyToManyField(
        'self',
        verbose_name='Связанные события',
        blank=True) 
    ord = models.SmallIntegerField(default=50, verbose_name = 'Порядок')

    def __src__(self):
        return self.title

    def get_next(self):
        return self.related_events.filter(ord__gte=self.ord).exclude(pk=self.pk).first()

    class Meta:
        ordering = ['ord']
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'
