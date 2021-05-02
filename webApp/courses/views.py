from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate
from . import models

# Create your views here.

def homeView(request):
    user_info = request.user
    if request.user.is_authenticated:
        course_info = request.user.courses
        context = { 'user_info' : user_info,
                    'course_info' : course_info}
        return render(request, 'index.html', context)
    return redirect('login:loginView')

def recentActivityView(request):
    pass
