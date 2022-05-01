import React from 'react'
import AddToCartButton from './AddToCartButton'
import DishAttributesList from './DishAttributesList'

const Dish = ({ dish, onCartUpdatedCallback }) => {
  return (
    <div className = "Dish">
        <h4 className = "DishName">{dish.name}</h4>
        <h4 className = "DishPrice">{dish.price}</h4>
        <DishAttributesList attributesList = {dish.attributes} />
        <AddToCartButton DishID = {dish.id} onCartUpdatedCallback = { onCartUpdatedCallback } />
    </div>
  )
}

export default Dish
