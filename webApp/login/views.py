from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseNotFound
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login

# Create your views here.

def loginView(request):
    
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request,user)
            request.session['failed'] = False
            return redirect('home:homeView')
        else:
            request.session['failed'] = True


    failed = request.session.get('failed', False)
    
    form = AuthenticationForm(request.POST)
    context = { 'login_form' : form,
                'failed' : failed}

    return render(request, 'login.html', context)
