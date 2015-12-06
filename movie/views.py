from django.views import generic 
from django.db import models

from . import models as movie_models

# Create your views here.

class ScreeeningListByDate(generic.ListView):
    queryset=movie_models.Screening.objects.all()
    template_name='movie/calendar.html'


    def get_context_data(self, **kw):
        c = super(ScreeeningListByDate, self).get_context_data(**kw)
        c['genre_list'] = movie_models.Genre.objects.all()
        return c
