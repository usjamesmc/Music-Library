from django.db import models
from songs.models import Song

class Music(models.Model):
    song = models.ForeignKey(Song, on_delete=models.CASCADE)
