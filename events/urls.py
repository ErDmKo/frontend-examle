from django.conf.urls import include, url
from django.views import generic
from . import models

urlpatterns = [
    url(r'^$', generic.list.ListView.as_view(
        queryset=models.Event.objects.filter(on_top=True)[:10],
        template_name='events/top.html'
    ), name='top'),
    url(r'^all/$', generic.TemplateView.as_view(template_name='events/event_list.html'), name='all'),
    url(
        r'^(?P<slug>[\w\-]+)/$',
        generic.detail.DetailView.as_view(
            model = models.Event,
            template_name='events/event_detail.html'
        ), name='detail'),
]
