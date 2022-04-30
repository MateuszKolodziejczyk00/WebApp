import React from 'react'
import DishAttributesList from './DishAttributesList'

const Dish = ({ dish }) => {
  return (
    <div className = "Dish">
        <h4 className = "DishName">{dish.name}</h4>
        <h4 className = "DishPrice">{dish.price}</h4>
        <DishAttributesList attributesList = {dish.attributes} />
    </div>
  )
}

export default Dish
