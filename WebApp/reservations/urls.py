from django.urls import path

from .views import MakeReservation

urlpatterns = [
    path('makeReservation', MakeReservation)
]