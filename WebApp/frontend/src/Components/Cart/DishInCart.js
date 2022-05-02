import React from 'react'
import { ReactComponent as Plus } from '../../Assets/plus.svg'
import { ReactComponent as Minus } from '../../Assets/minus.svg'

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
        <h3>{ dish.price } zł</h3>
      </div>
      <div className = "DishInCartFooter">
        <button onClick={ onAddPressed } >
          <Plus />
        </button>
        <button onClick={ onRemovePressed } >
          <Minus />
        </button>
      </div>
    </div>
  )
}

export default DishInCart
