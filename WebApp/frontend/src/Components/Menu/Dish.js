import React from 'react'
import AddToCartButton from './AddToCartButton'
import DishAttributesList from './DishAttributesList'

const Dish = ({ dish, onCartUpdatedCallback }) => {
  return (
    <div className = "Dish">
        <div className = "DishMain">
          <div className = "DishHeader">
            <h2 className = "DishName">{dish.name}</h2>
            <h2 className = "DishPrice">{dish.price}</h2>
          </div>
          <DishAttributesList attributesList = {dish.attributes} />
        </div>
        <AddToCartButton DishID = {dish.id} onCartUpdatedCallback = { onCartUpdatedCallback } />
    </div>
  )
}

export default Dish
