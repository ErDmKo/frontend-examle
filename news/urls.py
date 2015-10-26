from django.conf.urls import include, url
from django.views import generic

urlpatterns = [
    url(r'^$', generic.TemplateView.as_view(template_name='news/top.html'), name='top'),
    url(r'^all/$', generic.TemplateView.as_view(template_name='news/news_list.html'), name='all'),
    url(r'^(?P<slug>[\w\-]+)/$', generic.TemplateView.as_view(template_name='news/news_detail.html'), name='detail'),
]
