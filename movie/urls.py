from django.conf.urls import include, url
from django.views import generic
from . import models
from . import views

urlpatterns = [
    url(r'^$', 
        generic.list.ListView.as_view(
            queryset=models.Show.objects.filter(on_top=True)[:10],
            template_name='movie/main.html'),
        name='main'),
    url(r'^calendar/$', 
        views.SreeeningListByDate.as_view(),
        name='calendar'
    ),
    url(r'^catalog/$', 
        generic.list.ListView.as_view(
            queryset=models.Show.objects.all(),
            template_name='movie/catalog.html'
    ), name='catalog'),
    url(r'^archive/$', 
        generic.list.ListView.as_view(
            queryset=models.Show.objects.all(),
            template_name='movie/archive.html'
    ), name='archive'),
    url(r'^about/$', 
        generic.list.ListView.as_view(
            queryset=models.Show.objects.all(),
            template_name='movie/about.html'
    ), name='about'),
    url(
        r'^(?P<slug>[\w\-]+)/$',
        generic.detail.DetailView.as_view(
            model = models.Show,
        ),
    name='detail')
]
