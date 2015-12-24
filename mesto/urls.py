from django.conf.urls import include, url
from django.contrib import admin
from django.views import generic
from events import urls as events_urls
from texts import models as texts_models
from news import urls as news_urls
from api import urls as api_urls
from movie import urls as movie_urls
from movie import models as movie_models
from events import models as events_models
from news import models as news_models
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap
from django.contrib.sitemaps import GenericSitemap

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', generic.TemplateView.as_view(template_name='mesto/main.html'), name='main'),
    url(r'^movietheater/', include(movie_urls, namespace='movie')),
    url(r'^api/', include(api_urls, namespace='api')),
    url(r'^events/', include(events_urls, namespace='events')),
    url(r'^news/', include(news_urls, namespace='news')),
    url(r'^thanks/', generic.TemplateView.as_view(template_name="mesto/thanks.html"), name='thanks'),
    url(r'^feedback/', generic.edit.CreateView.as_view(
        model = texts_models.Feedback,
        fields = [
            'first_name',
            'phone',
            'email',
            'comment'
        ],
        template_name='mesto/feedBack.html'
    ), name='feedback'),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    url(r'^sitemap\.xml$', sitemap, {'sitemaps': {
            'news': GenericSitemap({
                'queryset': news_models.News.objects.all(),
                'date_field': 'date',
            }, priority=0.6),
            'events': GenericSitemap({
                'queryset': events_models.Event.objects.all(),
                'date_field': 'date',
            }, priority=0.6),
            'shows': GenericSitemap({
                'queryset': movie_models.Show.objects.all(),
                'date_field': 'date',
            }, priority=0.6)
        }},
        name='django.contrib.sitemaps.views.sitemap')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
