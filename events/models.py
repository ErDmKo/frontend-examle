from django.db import models
from django.core.urlresolvers import reverse
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
        symmetrical=False,
        blank=True) 
    ord = models.SmallIntegerField(default=50, verbose_name = 'Порядок')

    def __src__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('events:detail', kwargs={'slug': self.slug})

    def get_next(self):
        return self.related_events.all()

    class Meta:
        ordering = ['ord']
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'
