from django.shortcuts import render

# Layouts Pages
def layout1(request):
    return render(request,"layouts/layouts-1.html")
def layout6(request):
    return render(request,"layouts/layouts-6.html")
