from django.contrib import admin

from .models import DishAttribute, DishType, Dish

admin.site.register(DishType)
admin.site.register(DishAttribute)
admin.site.register(Dish)