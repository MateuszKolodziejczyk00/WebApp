from django.urls import path

from .views import AddDish, GetDishes, OnPaymentApproved, RemoveDish

urlpatterns = [
    path('addDish/<int:dishID>/', AddDish),
    path('removeDish/<int:dishID>/', RemoveDish),
    path('onPaymentApproved', OnPaymentApproved),
    path('getDishes/', GetDishes)
]