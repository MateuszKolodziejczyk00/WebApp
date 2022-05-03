import React, { useState, useEffect } from 'react'
import DishInCart from './DishInCart'
import PaymentButton from './PaymentButton'

const cart = ({ dishesInCart, onCartUpdatedCallback }) => {

  let getFullPrice = () =>
  {
    let fullPrice = 0
    for(let i = 0; i < dishesInCart.length; i++)
    {
      fullPrice = fullPrice + dishesInCart[i].price
    }
    return fullPrice
  }

  return (
    <div>
      <h1>Koszyk</h1>
      <h2>Razem: { getFullPrice() }zł</h2>
      { dishesInCart.length > 0 ? <PaymentButton price = { getFullPrice().toString() } /> : null }
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
