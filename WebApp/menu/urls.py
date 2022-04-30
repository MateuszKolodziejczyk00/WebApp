
from django.urls import path, include
from .views import DishesView

urlpatterns = [
    path('dishes', DishesView.as_view())
]