from django.views import generic 
from django.db import models

from . import models as movie_models

# Create your views here.

class SreeeningListByDate(generic.ListView):
    queryset=movie_models.Screening.objects.all()
    template_name='movie/calendar.html'
