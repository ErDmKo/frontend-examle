from django.conf.urls import include, url
from django.contrib import admin
from django.views import generic
from events import urls as events_urls
from news import urls as news_urls
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', generic.TemplateView.as_view(template_name='mesto/main.html'), name='main'),
    url(r'^events/', include(events_urls, namespace='events')),
    url(r'^news/', include(news_urls, namespace='news')),
    url(r'^feedback/', generic.TemplateView.as_view(template_name='mesto/feedBack.html'), name='feedback'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
