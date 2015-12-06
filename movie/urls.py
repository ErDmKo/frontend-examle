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
    url(r'^calendar/', 
        views.ScreeeningListByDate.as_view(),
        name='calendar'
    ),
    url(r'^catalog/$', 
        views.Catalog.as_view(),
        name='catalog'
    ),
    url(r'^archive/$', 
        views.Archive.as_view(), 
        name='archive'
    ),
    url(r'^about/$', 
        generic.TemplateView.as_view(
            template_name='movie/about.html'
        ),
        name='about'
    ),
    url(
        r'^(?P<slug>[\w\-]+)/$',
        generic.detail.DetailView.as_view(
            model = models.Show,
        ),
    name='detail')
]
