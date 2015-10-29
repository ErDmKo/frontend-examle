from django.conf.urls import include, url
from django.views import generic
from . import models

urlpatterns = [
    url(
        r'^$',
         generic.list.ListView.as_view(
            queryset=models.News.objects.filter(on_top=True)[:10],
            template_name='news/top.html'
        ),
    name='top'),
    url(r'^all/$', 
        generic.list.ListView.as_view(
            queryset=models.News.objects.all(),
            paginate_by = 3,
            template_name='news/event_list.html'
        ),
    name='all'),
    url(
        r'^(?P<slug>[\w\-]+)/$',
        generic.detail.DetailView.as_view(
            model = models.News,
        ),
    name='detail')
]
