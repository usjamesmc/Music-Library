from django.urls import path
from . import views
from .models import Song

urlpatterns = [     
    path('', views.songs_list),
    path('<int:pk>/', views.song_detail),
]