from rest_framework import serializers
from .models import Dish, DishAttribute, DishType

class DishSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dish
        fields = ('id', 'name', 'price', 'attributes')
        depth = 1


class DishTypeSerializer(serializers.ModelSerializer):
    dishes = DishSerializer(source = 'dish_set', many = True)

    class Meta:
        model = DishType
        fields = ('displayName', 'image', 'dishes')


class DishTypeNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = DishType
        fields = "__all__"


class DishAttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DishAttribute
        fields = "__all__"