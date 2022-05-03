import React from 'react'
import DishInCart from './DishInCart'

const DishesInCartList = ({ dishesInCart, onCartUpdatedCallback, allowModifying }) =>
{
  return (
    <div>
      {
        dishesInCart.map((dish, index) =>
        (
          <DishInCart key = { index } dish = { dish } onCartUpdatedCallback = { onCartUpdatedCallback } allowModifying = { allowModifying } />
        ))
      }
    </div>
  )
}

export default DishesInCartList
