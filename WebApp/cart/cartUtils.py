import pickle


class UserCart:
    keyName = 'Cart'


def getSession(request):
    if not request.session.exists(request.session.session_key):
        request.session.create()
    
    return request.session


def loadUserCart(session):
    cart = pickle.loads(bytes.fromhex(session.get(UserCart.keyName)))
    return cart


def saveUserCart(session, cart):
    session[UserCart.keyName] = pickle.dumps(cart).hex()
    session.modified = True


def getUserCart(session):
    if UserCart.keyName not in session:
        saveUserCart(session, {})
    
    return loadUserCart(session)
    return session.get(UserCart.keyName)


def addElementToCart(request, ID):
    session = getSession(request)
    cart = getUserCart(session)

    cart[ID] = cart[ID] + 1 if ID in cart else 1

    saveUserCart(session, cart)


def removeElementFromCart(request, ID):
    session = getSession(request)
    cart = getUserCart(session)

    del cart[ID]

    saveUserCart(session, cart)


def getElementsInCart(request):
    session = getSession(request)
    cart = getUserCart(session)

    return cart