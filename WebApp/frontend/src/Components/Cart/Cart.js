import React, { useState, useEffect } from 'react'

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
    console.log(data)
    setDishesInCart(data)
  }

  return (
    <div>
      <h1>CART</h1>
    </div>
  )
}

export default cart
