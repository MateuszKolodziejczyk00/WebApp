from .models import Dish, DishType
from .serializers import DishSerializer, DishTypeSerializer


def getAllDishes():
    dishes = DishType.objects.all()
    serializer = DishTypeSerializer(dishes, many = True)
    return serializer.data