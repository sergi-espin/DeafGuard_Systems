from django.http import HttpResponse
from django.shortcuts import render

# Layouts Pages

def login(request):
    return render(request,"account/auth-login.html")
def recover_password(request):
    return render(request,"account/auth-recoverpw.html")
def register(request):
    return render(request,"account/auth-register.html")
