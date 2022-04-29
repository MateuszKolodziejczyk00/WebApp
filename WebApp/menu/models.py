from django.db import models

class DishType(models.Model):
    name = models.TextField(null = False, blank = False)


class Dish(models.Model):
    name = models.TextField(null = False, blank = False)
    price = models.IntegerField()
    type = models.ForeignKey(DishType, on_delete = models.CASCADE)


class DishAttribute(models.Model):
    name = models.TextField(null = False, blank = False)


class DishToAttributeMappingA(models.Model):
    dish = models.ForeignKey(Dish, on_delete = models.CASCADE)
    attribute = models.ForeignKey(DishAttribute, on_delete = models.CASCADE)