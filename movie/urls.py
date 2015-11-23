from django.conf.urls import include, url
from django.views import generic

urlpatterns = [
    url(r'^$', generic.TemplateView.as_view(template_name='movie/main.html'), name='main'),
]
