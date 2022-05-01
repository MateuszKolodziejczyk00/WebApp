
from django.urls import path

from .views import GetAllAttributes, GetAllDishTypes, GetAllDishes


urlpatterns = [
    path('dishes', GetAllDishes),
    path('attributes', GetAllAttributes),
    path('types', GetAllDishTypes)
]