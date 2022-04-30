from rest_framework import serializers
from .models import Dish, DishType

class DishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dish
        fields = ('id', 'name', 'price', 'attributes')


class DishTypeSerializer(serializers.ModelSerializer):
    dishes = DishSerializer(source = 'dish_set', many = True)

    class Meta:
        model = DishType
        fields = ('name', 'dishes')