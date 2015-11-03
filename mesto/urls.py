from django.conf.urls import include, url
from django.contrib import admin
from django.views import generic
from events import urls as events_urls
from texts import models as texts_models
from news import urls as news_urls
from api import urls as api_urls
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', generic.TemplateView.as_view(template_name='mesto/main.html'), name='main'),
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
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
