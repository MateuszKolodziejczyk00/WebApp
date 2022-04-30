from django.urls import path

from .views import AddDish, GetDishes, RemoveDish

urlpatterns = [
    path('addDish/<str:dishID>/', AddDish),
    path('removeDish/<str:dishID>/', RemoveDish),
    path('getDishes/', GetDishes)
]