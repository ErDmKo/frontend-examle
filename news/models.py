from django.db import models
from django.core.urlresolvers import reverse
from texts import models as texts_models 

class News(texts_models.Text):
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

    def get_absolute_url(self):
        return reverse('news:detail', kwargs={'slug': self.slug})

    def get_next(self):
        return [self.get_next_by_date()]

    class Meta:
        ordering = ['-date']
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
