from django.urls import path
from . import views


app_name = "courses"
urlpatterns = [
    path('', views.homeView, name='homeView'),
    path('<str:Course>/', views.courseView),
]

