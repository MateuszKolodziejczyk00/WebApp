from asyncio.windows_events import NULL
from .cartUtils import addElementToCart, getElementsInCart

from menu.models import Dish

def addDishToCart(request, dishID):
    addElementToCart(request, dishID)

def removeDishFromCart(request, dishID):
    removeDishFromCart(request, dishID)

def getDishesInCartInfo(request):
    dishIdToNum = getElementsInCart(request)

    keys = dishIdToNum.keys()

    cartInfo = {}

    for dishId in keys:
        dish = Dish.objects.get(id = dishId)
        if dish:
            dishInfo = {}
            dishInfo['price'] = dish.price
            dishInfo['num'] = dishIdToNum[dish.id]

            cartInfo[dish.name] = dishInfo

    return cartInfo