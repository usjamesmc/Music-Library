from rest_framework import serializers
from .models import Song

class SuperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ['id', 'title', 'artist', 'albun', 'release_date', 'genre']
        
   