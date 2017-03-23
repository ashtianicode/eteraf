from web.models import Post
from rest_framework import serializers

class postserializer(serializers.ModelSerializer):
    class Meta:
        model= Post
        fields = (
        'summery',
        'text',
        'confessmode'
        )
