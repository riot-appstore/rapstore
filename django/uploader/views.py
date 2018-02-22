from django.shortcuts import render
from django.template.loader import get_template
from django.http import HttpResponse

def uploader(request):
    t = get_template('uploader.html')
    html = t.render(context={}, request=request)
    return HttpResponse(html)

# Create your views here.
