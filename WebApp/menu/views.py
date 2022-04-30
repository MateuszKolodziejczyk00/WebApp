from http.client import HTTPResponse
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

from .utils import getAllDishes


class DishesView(APIView):

    def get(self, request, format = None):
        return Response(getAllDishes())