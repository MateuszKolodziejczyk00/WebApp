import React, { useState, useEffect } from 'react'
import DishesTypePanel from './DishesTypePanel'

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
      <div>
        {
          dishTypes.map((dishType) => 
          (
            <DishesTypePanel dishTypeName = {dishType.name} dishesList = {dishType.dishes} />
          ))
        }
      </div>
    </div>
  )
}

export default MenuPage
