from rest_framework import serializers
from texts import models as texts_models

class FeedBackSerializer(serializers.ModelSerializer):

    class Meta:
        model = texts_models.Feedback
        fields = (
            'first_name',
            'phone',
            'email',
            'comment',
        )
