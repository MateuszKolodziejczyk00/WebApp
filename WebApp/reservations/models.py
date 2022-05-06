from django.db import models

# Create your models here.

class Reservation(models.Model):
    name = models.TextField(null = False, blank = False)
    email = models.TextField(null = False, blank = False)
    phoneNumber = models.TextField(null = False, blank = False, max_length=9)
    numberOfPeople = models.IntegerField(null = False, blank = False)
    date = models.DateTimeField(null = False, blank = False)