from django.db import models
from texts import models as texts_models 

class Show(texts_models.Text):
    on_top = models.BooleanField(
        default=False,
        verbose_name = 'Вывод на главную')
    image = models.ImageField(
        upload_to = 'movie_headers',
        verbose_name='Изображение для списка')
    genre = models.CharField(
        max_length=255,
        verbose_name='Жанр')
    director = models.CharField(
        max_length=255,
        verbose_name='Режисер')
    roles = models.TextField(
        verbose_name='Роли')
    original_title = models.CharField(
        max_length=255,
        verbose_name='Оригинальное название') 
    year = models.BigIntegerField(
        verbose_name='Год')
    rating = models.FloatField(
        verbose_name='Рейтинг')
    duration = models.BigIntegerField(
        verbose_name='Продолжительность в мин')
    trailer = models.TextField(
        verbose_name = 'Ссылка на видео трейлера')
    ord = models.SmallIntegerField(default=50, verbose_name = 'Порядок')
        
    def __src__(self):
        return self.title

    class Meta:
        ordering = ['ord']
        verbose_name = 'Релиз'
        verbose_name_plural = 'Релизы'
