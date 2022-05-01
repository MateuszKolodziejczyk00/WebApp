import React, { useState, useEffect } from 'react'
import DishInCart from './DishInCart'

const cart = () => {
  let [dishesInCart, setDishesInCart] = useState([])

  useEffect(() =>
  {
    getDishesInCart()
  }, [])

  let getDishesInCart = async () => 
  {
    let response = await fetch('/cart/getDishes')
    let data = await response.json()
    setDishesInCart(data)
  }

  return (
    <div>
      {
        dishesInCart.map((dish, index) =>
        (
          <DishInCart key = { index } dish = { dish } />
        ))
      }
    </div>
  )
}

export default cart
