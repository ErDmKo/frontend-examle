from django.views import generic 
from django.db import models

from . import models as movie_models

# Create your views here.

class ScreeeningListByDate(generic.ListView):
    queryset=movie_models.Screening.objects.all()
    template_name='movie/calendar.html'

    def get_queryset(self):
        qs = super(ScreeeningListByDate, self).get_queryset()
        if self.request.GET.get('rating'):
            qs = qs.filter(show__rating = self.request.GET['rating'])
        if self.request.GET.get('year'):
            qs = qs.filter(show__year = self.request.GET['year'])
        if self.request.GET.get('genre'):
            qs = qs.filter(show__genre_list__id= self.request.GET['genre'])
        print(self.request.GET)
        return qs

    def get_context_data(self, **kw):
        c = super(ScreeeningListByDate, self).get_context_data(**kw)
        c['genre_list'] = movie_models.Genre.objects.all()
        return c
