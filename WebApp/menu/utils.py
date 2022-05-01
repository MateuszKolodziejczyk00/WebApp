from .models import DishAttribute, DishType
from .serializers import DishAttributeSerializer, DishTypeNameSerializer, DishTypeSerializer

def getAllDishes():
    dishes = DishType.objects.all()
    serializer = DishTypeSerializer(dishes, many = True)
    return serializer.data


def getAllAttributes():
    attributes = DishAttribute.objects.all()
    serializer = DishAttributeSerializer(attributes, many = True)
    return serializer.data


def getAllDishTypes():
    types = DishType.objects.all()
    serializer = DishTypeNameSerializer(types, many = True)
    return serializer.data