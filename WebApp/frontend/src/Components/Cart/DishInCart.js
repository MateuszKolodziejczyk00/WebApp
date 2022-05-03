import React from 'react'
import { ReactComponent as Plus } from '../../Assets/plus.svg'
import { ReactComponent as Minus } from '../../Assets/minus.svg'

const DishInCart = ({ dish, onCartUpdatedCallback, allowModifying }) =>
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

  let displayModificationWidgets = () =>
  {
    return (
          <div className = "DishInCartFooter">
            <button onClick={ onAddPressed } >
              <Plus />
            </button>
            <button onClick={ onRemovePressed } >
              <Minus />
            </button>
          </div>
        )
  }

  return (
    <div className = "DishInCart">
      <div className = "DishInCartHeader">
        <h3>{ dish.num }</h3>
        <h3>{ dish.name }</h3>
        <h3>{ dish.price } zł</h3>
      </div>
      {
        allowModifying ? displayModificationWidgets() : null
      }
    </div>
  )
}

export default DishInCart
