from django.urls import path
from . import views


app_name = 'login'
urlpatterns = [

path('', views.blankView, name='blankView'),
path('login/', views.loginView, name='loginView'),
]

