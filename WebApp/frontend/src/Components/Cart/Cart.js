import React, { useState, useEffect } from 'react'
import DishInCart from './DishInCart'

const cart = ({ dishesInCart, onCartUpdatedCallback }) => {
  return (
    <div>
      <h1>Koszyk</h1>
      {
        dishesInCart.map((dish, index) =>
        (
          <DishInCart key = { index } dish = { dish } onCartUpdatedCallback = { onCartUpdatedCallback } />
        ))
      }
    </div>
  )
}

export default cart
