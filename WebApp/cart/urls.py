from django.urls import path

from .views import AddDish, GetDishes, RemoveDish

urlpatterns = [
    path('addDish/<int:dishID>/', AddDish),
    path('removeDish/<int:dishID>/', RemoveDish),
    path('getDishes/', GetDishes)
]