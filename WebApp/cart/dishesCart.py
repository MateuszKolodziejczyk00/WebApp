from asyncio.windows_events import NULL
from .cartUtils import addElementToCart, getElementsInCart, removeElementFromCart

from menu.models import Dish

def addDishToCart(request, dishID):
    addElementToCart(request, dishID)

def removeDishFromCart(request, dishID):
    removeElementFromCart(request, dishID)

def getDishesInCartInfo(request):
    dishIdToNum = getElementsInCart(request)

    keys = dishIdToNum.keys()

    cartInfo = []

    for dishId in keys:
        dish = Dish.objects.get(id = dishId)
        if dish:
            dishInfo = {}

            dishNum = dishIdToNum[dish.id]
            price = dishNum * dish.price

            dishInfo['id'] = dish.id
            dishInfo['name'] = dish.name
            dishInfo['price'] = price
            dishInfo['num'] = dishNum

            cartInfo.append(dishInfo)

    return cartInfo