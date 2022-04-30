import React, { useState, useEffect } from 'react'
import DishesTypePanel from './DishesTypePanel'
import Cart from '../Cart/Cart'

const MenuPage = () => {
  let [dishTypes, setDishTypes] = useState([])

  useEffect(() =>
  {
    getDishTypes()
  }, [])

  let getDishTypes = async () => 
  {
    let response = await fetch('/menu/dishes')
    let data = await response.json()
    setDishTypes(data)
  }

  return (
    <div className = "MenuPage">
      <h1 className = "MenuTitle">Menu</h1>
      <Cart />
      <div>
        {
          dishTypes.map((dishType, index) => 
          (
            <DishesTypePanel key = {index} dishTypeName = {dishType.name} dishesList = {dishType.dishes} />
          ))
        }
      </div>
    </div>
  )
}

export default MenuPage
