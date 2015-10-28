from django.conf.urls import include, url
from django.views import generic
from . import models
from . import views

urlpatterns = [
    url(
        r'^$',
         generic.list.ListView.as_view(
            queryset=models.Event.objects.filter(on_top=True)[:10],
            template_name='events/top.html'
        ),
    name='top'),
    url(r'^all/$', 
        generic.list.ListView.as_view(
            queryset=models.Event.objects.all(),
            paginate_by = 3,
            template_name='events/event_list.html'
        ), name='all'),
    url(
        r'^(?P<slug>[\w\-]+)/$',
        generic.detail.DetailView.as_view(
            model = models.Event,
        ),
        name='detail'
    )
]
