import React from 'react'

const DishInCart = ({ dish, onCartUpdatedCallback }) =>
{
  let onAddPressed = async () => 
  {
    fetch(`/cart/addDish/${dish.id}/`,
    {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' }
    })
    .then((data) =>
    {
      onCartUpdatedCallback()
    })
  }
  
  let onRemovePressed = async () => 
  {
    fetch(`/cart/removeDish/${dish.id}/`,
    {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' }
    })
    .then((data) =>
    {
      onCartUpdatedCallback()
    })
  }

  return (
    <div className = "DishInCart">
      <div className = "DishInCartHeader">
        <h3>{ dish.num }</h3>
        <h3>{ dish.name }</h3>
        <h3>{ dish.price }</h3>
      </div>
      <div className = "DishInCartFooter">
        <button onClick={ onAddPressed } >+</button>
        <button onClick={ onRemovePressed } >-</button>
      </div>
    </div>
  )
}

export default DishInCart
