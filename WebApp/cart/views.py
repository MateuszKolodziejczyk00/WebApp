from http.client import HTTPResponse
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .dishesCart import addDishToCart, getDishesInCartInfo, removeDishFromCart


@api_view(['GET'])
def GetDishes(request):
    cartInfo = getDishesInCartInfo(request)
    return JsonResponse(cartInfo, safe = False)


@api_view(['PUT'])
def AddDish(request, dishID):
    addDishToCart(request, dishID)
    return Response()


@api_view(['PUT'])
def RemoveDish(request, dishID):
    removeDishFromCart(request, dishID)
    return Response()