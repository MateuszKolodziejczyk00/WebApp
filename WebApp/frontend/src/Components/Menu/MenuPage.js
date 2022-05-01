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

  let [forceUpdateValue, setForceUpdateValue ] = useState(0)

  let forceUpdate = () =>
  {
      return setForceUpdateValue(forceUpdateValue + 1)
  }

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
    forceUpdate()
  }

  let getAttributeFilter = (attribute) =>
  {
    return dishAttributesFilter.has(attribute)
  }

  let switchAttributeFilter = (attribute) =>
  {
    getAttributeFilter(attribute) ?  dishAttributesFilter.delete(attribute) : dishAttributesFilter.add(attribute)
    forceUpdate()
  }

  let shouldShowDishTypePanel = (dishTypeName) =>
  {
    if(dishTypesFilter.size == 0)
    {
      return true
    }
    else
    {
      return dishTypesFilter.has(dishTypeName)
    }
  }

  return (
    <div>
      <div className = "Cart">
        <Cart dishesInCart = { dishesInCart } onCartUpdatedCallback = { getDishesInCart } />
      </div>
      <div className = "MenuPage">
        <div>
          <h2>Rodzaje dań</h2>
          <DishFilter filterElements = { dishTypes } getFilterValue = { getTypeFilter } switchFilterValue = { switchTypeFilter } />
          <h2>Dodatkowe filtry</h2>
          <DishFilter filterElements = { dishAttributes } getFilterValue = { getAttributeFilter } switchFilterValue = { switchAttributeFilter } />
        </div>
        <h1 className = "MenuTitle">Menu</h1>
        <div>
          {
            dishesPerType.map((dishType, index) => 
            (
              shouldShowDishTypePanel(dishType.name)
                ? <DishesTypePanel key = {index} dishTypeName = {dishType.name} dishesList = {dishType.dishes} dishAttributesFilterSet = { dishAttributesFilter } onCartUpdatedCallback = { getDishesInCart } />
                : null
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MenuPage
