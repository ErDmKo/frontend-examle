from django.conf.urls import url

from . import views

urlpatterns = [
    url(
        r'^feedback/',
        views.CreateFeedback.as_view(),
        name='feedback'
    ),
]
