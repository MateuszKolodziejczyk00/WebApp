import React, { useState, useEffect } from 'react'
import DishesTypePanel from './DishesTypePanel'
import Cart from '../Cart/Cart'

const MenuPage = () =>
{
  let [dishTypes, setDishTypes] = useState([])
  let [dishesInCart, setDishesInCart] = useState([])

  useEffect(() =>
  {
    getDishTypes()
    getDishesInCart()
  }, [])

  let getDishTypes = async () => 
  {
    let response = await fetch('/menu/dishes')
    let data = await response.json()
    setDishTypes(data)
  }

  let getDishesInCart = async () => 
  {
    let response = await fetch('/cart/getDishes')
    let data = await response.json()
    setDishesInCart(data)
  }

  return (
    <div className = "MenuPage">
      <h1 className = "MenuTitle">Menu</h1>
      <Cart dishesInCart = { dishesInCart } onCartUpdatedCallback = { getDishesInCart } />
      <div>
        {
          dishTypes.map((dishType, index) => 
          (
            <DishesTypePanel key = {index} dishTypeName = {dishType.name} dishesList = {dishType.dishes} onCartUpdatedCallback = { getDishesInCart } />
          ))
        }
      </div>
    </div>
  )
}

export default MenuPage
