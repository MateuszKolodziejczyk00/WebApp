from django.shortcuts import render

from rest_framework.response import Response

def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')