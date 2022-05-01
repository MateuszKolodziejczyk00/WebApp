import React, { useState, useEffect } from 'react'
import DishInCart from './DishInCart'

const cart = ({ dishesInCart }) => {
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
