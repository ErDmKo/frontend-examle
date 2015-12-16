import datetime
from django.db import models
from texts import models as texts_models 

class Genre(models.Model):
    title = models.CharField(
        max_length=200,
        verbose_name='Название')
    ord = models.SmallIntegerField(default=50, verbose_name = 'Порядок')

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['ord']
        verbose_name = 'Жанр'
        verbose_name_plural = 'Жанры'

class Show(texts_models.Text):
    on_top = models.BooleanField(
        default=False,
        verbose_name = 'Вывод на главную')
    on_archive = models.BooleanField(
        default=False,
        verbose_name = 'Показывать как архивный')
    on_catalog = models.BooleanField(
        default=False,
        verbose_name = 'Показывать в каталоге')
    short_desc = models.CharField(
        blank = True,
        max_length=255,
        verbose_name='Короткое описание')
    image = models.ImageField(
        upload_to = 'movie_headers',
        verbose_name='Изображение для списка')
    genre_list = models.ManyToManyField(
        Genre,
        verbose_name="Жанры",
        blank=True, 
        symmetrical=False)
    director = models.CharField(
        max_length=255,
        verbose_name='Режисер')
    roles = models.TextField(
        verbose_name='Роли')
    original_title = models.CharField(
        max_length=255,
        verbose_name='Оригинальное название', 
        help_text='Пример Mission: Impossible — Rogue Nation')
    year = models.BigIntegerField(
        verbose_name='Год')
    rating = models.FloatField(
        verbose_name='Рейтинг')
    duration = models.BigIntegerField(
        verbose_name='Продолжительность в мин')
    trailer = models.TextField(
        verbose_name = 'Ссылка на видео трейлера',
        help_text='Пример Li7bv9lbaBo')
    ord = models.SmallIntegerField(default=50, verbose_name = 'Порядок')
        
    def get_rating(self):
        return str(self.rating).replace(',', '.')

    def genre(self):
        return self.genre_list.all()[0] if self.genre_list.count() else ''

    def get_dates(self):
        return self.screening_set.filter(date__gt=datetime.datetime.now())

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['ord']
        verbose_name = 'Релиз'
        verbose_name_plural = 'Релизы'

class ScreeningManager(models.Manager):
    def get_query_set(self):
        return super(ScreeningManager, self).get_query_set().filter(date__gt=datetime.datetime.now())

class Screening(models.Model):
    show = models.ForeignKey(Show, verbose_name="Релиз")
    date = models.DateTimeField(verbose_name="Дата и время показа")

    objects = ScreeningManager()

    class Meta:
        ordering = ['date']
        verbose_name = 'Сеанс'
        verbose_name_plural = 'Сеансы'
