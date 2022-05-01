from rest_framework.decorators import api_view
from rest_framework.response import Response

from .utils import getAllAttributes, getAllDishTypes, getAllDishes


@api_view(['GET'])
def GetAllDishes(request):
    return Response(getAllDishes())


@api_view(['GET'])
def GetAllAttributes(request):
    return Response(getAllAttributes())


@api_view(['GET'])
def GetAllDishTypes(request):
    return Response(getAllDishTypes())
