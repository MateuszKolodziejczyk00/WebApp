import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DishesInCartList from './DishesInCartList'
import DishInCart from './DishInCart'
import PaymentButton from './PaymentButton'

const cart = ({ dishesInCart, onCartUpdatedCallback, allowModifying }) => {

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
      <div className = "CartPaymentButton">
        <Link to = '/PaymentForm'>
            <h2>Przejdź do płatności</h2>
        </Link>
      </div>
      <DishesInCartList dishesInCart={ dishesInCart } onCartUpdatedCallback = { onCartUpdatedCallback } allowModifying = { allowModifying } />
    </div>
  )
}

export default cart
