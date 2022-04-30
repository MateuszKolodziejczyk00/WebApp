class UserCart:
    keyName = 'Cart'


def getSession(request):
    if not request.session.exists(request.session.session_key):
        request.session.create()
    
    return request.session


def getUserCart(session):
    if UserCart.keyName not in session:
        session[UserCart.keyName] = {}
    
    return session.get(UserCart.keyName)


def addElementToCart(request, ID):
    session = getSession(request)
    cart = getUserCart(session)

    prevElementsCount = cart.get(ID, 0)
    cart[ID] = prevElementsCount

    session.modified = True


def removeElementFromCart(request, ID):
    session = getSession(request)
    cart = getUserCart(session)

    del cart[ID]

    session.modified = True


def getElementsInCart(request):
    session = getSession(request)
    cart = getUserCart(session)

    return cart