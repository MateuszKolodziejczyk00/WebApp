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
    <div>
      <h1>Menu</h1>
      {
        dishTypes.map((dishType) => 
        (
          <DishesTypePanel dishTypeName = {dishType.name} dishesList = {dishType.dishes} />
        ))
      }
    </div>
  )
}

export default MenuPage
