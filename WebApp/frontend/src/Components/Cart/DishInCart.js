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
    <div>
      <h4>{ dish.name }</h4>
      <h4>{ dish.num }</h4>
      <h4>{ dish.price }</h4>
      <button onClick={ onAddPressed } >+</button>
      <button onClick={ onRemovePressed } >-</button>
    </div>
  )
}

export default DishInCart
