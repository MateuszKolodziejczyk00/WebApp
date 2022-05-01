import React, { useState, useEffect } from 'react'
import DishesTypePanel from './DishesTypePanel'
import Cart from '../Cart/Cart'
import DishFilter from './DishFilter'

const MenuPage = () =>
{
  let [dishesPerType, setdishesPerType] = useState([])
  let [dishesInCart, setDishesInCart] = useState([])
  let [dishTypes, setDishTypes] = useState([])
  let [dishAttributes, setDishAttributes] = useState([])

  let [dishTypesFilter, setDishTypesFilter] = useState(new Set())
  let [dishAttributesFilter, setDishAttributesFilter] = useState(new Set())

  useEffect(() =>
  {
    getDishesPerType()
    getDishesInCart()
    getDishTypes()
    getDishAttributes()
  }, [])

  let getDishesPerType = async () => 
  {
    let response = await fetch('/menu/dishes')
    let data = await response.json()
    setdishesPerType(data)
  }

  let getDishesInCart = async () => 
  {
    let response = await fetch('/cart/getDishes')
    let data = await response.json()
    setDishesInCart(data)
  }

  let getDishTypes = async () =>
  {
      let response = await fetch('/menu/types')
      let data = await response.json()
      setDishTypes(data)
  }

  let getDishAttributes = async () =>
  {
      let response = await fetch('/menu/attributes')
      let data = await response.json()
      setDishAttributes(data)
  }

  let getTypeFilter = (dishType) =>
  {
    return dishTypesFilter.has(dishType) 
  }

  let switchTypeFilter = (dishType) =>
  {
    getTypeFilter(dishType) ?  dishTypesFilter.delete(dishType) : dishTypesFilter.add(dishType)
    setDishTypesFilter(dishTypesFilter)
  }

  let getAttributeFilter = (attribute) =>
  {
    return dishAttributesFilter.has(attribute)
  }

  let switchAttributeFilter = (attribute) =>
  {
    getAttributeFilter(attribute) ?  dishAttributesFilter.delete(attribute) : dishAttributesFilter.add(attribute)
    setDishAttributesFilter(dishAttributesFilter)
  }

  return (
    <div className = "MenuPage">
      <h1 className = "MenuTitle">Menu</h1>
      <Cart dishesInCart = { dishesInCart } onCartUpdatedCallback = { getDishesInCart } />
      <div>
        <DishFilter filterElements = { dishTypes } getFilterValue = { getTypeFilter } switchFilterValue = { switchTypeFilter } />
        <DishFilter filterElements = { dishAttributes } getFilterValue = { getAttributeFilter } switchFilterValue = { switchAttributeFilter } />
        {
          dishesPerType.map((dishType, index) => 
          (
            <DishesTypePanel key = {index} dishTypeName = {dishType.name} dishesList = {dishType.dishes} onCartUpdatedCallback = { getDishesInCart } />
          ))
        }
      </div>
    </div>
  )
}

export default MenuPage
