import datetime
from django.views import generic 
from . import models 

class ScreeeningListByDate(generic.ListView):
    template_name='movie/calendar.html'

    def get_queryset(self):
        qs=models.Screening.objects.filter(date__gt=datetime.datetime.now())
        if self.request.GET.get('rating'):
            rating = self.request.GET['rating']
            if '-' not in rating:
                qs = qs.filter(show__rating = rating)
            else:
                rating_start, rating_end = rating.split('-')
                qs = qs.filter(show__rating__gte = rating_start, show__rating__lte=rating_end)
        if self.request.GET.get('year'):
            qs = qs.filter(show__year = self.request.GET['year'])
        if self.request.GET.get('genre'):
            qs = qs.filter(show__genre_list__id= self.request.GET['genre'])
        print(self.request.GET)
        return qs

    def get_context_data(self, **kw):
        c = super(ScreeeningListByDate, self).get_context_data(**kw)
        c['genre_list'] = models.Genre.objects.all()
        return c

class Catalog(ScreeeningListByDate):

    queryset=models.Show.objects.filter(on_catalog=True)
    template_name='movie/catalog.html'

    def get_queryset(self):
        qs = self.queryset
        if self.request.GET.get('rating'):
            rating = self.request.GET['rating']
            if '-' not in rating:
                qs = qs.filter(rating = rating)
            else:
                rating_start, rating_end = rating.split('-')
                qs = qs.filter(rating__gte = rating_start, rating__lte=rating_end)
        if self.request.GET.get('year'):
            qs = qs.filter(year = self.request.GET['year'])
        if self.request.GET.get('genre'):
            qs = qs.filter(genre_list__id= self.request.GET['genre'])
        return qs

class Archive(Catalog):
    queryset=models.Show.objects.filter(on_archive=True)
    template_name='movie/archive.html'
