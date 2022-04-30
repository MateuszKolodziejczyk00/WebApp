from django.db import models

class DishType(models.Model):
    name = models.TextField(null = False, blank = False)

    def __str__(self):
        return self.name


class DishAttribute(models.Model):
    name = models.TextField(null = False, blank = False)

    def __str__(self):
        return self.name


class Dish(models.Model):
    name = models.TextField(null = False, blank = False)
    price = models.IntegerField()
    type = models.ForeignKey(DishType, on_delete = models.CASCADE)
    attributes = models.ManyToManyField(DishAttribute, blank = True, null = True)

    def __str__(self):
        return self.name