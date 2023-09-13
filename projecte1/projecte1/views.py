from django.http import HttpResponse 
from django.shortcuts import render

def opiniones(request):
    return render(request, 'opiniones.html')

def inicio(request):
    return render(request, 'inicio.html')

def calculo(request,num):
    resultat = num + 10
    return HttpResponse('%s + 10 = %s'% (num,resultat))

