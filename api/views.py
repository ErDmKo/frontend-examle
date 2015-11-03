from rest_framework import generics, permissions

from . import serializers
from texts import models as texts_models

class CreateFeedback(generics.CreateAPIView):
    model = texts_models.Feedback
    serializer_class = serializers.FeedBackSerializer
    permission_classes = permissions.AllowAny,
