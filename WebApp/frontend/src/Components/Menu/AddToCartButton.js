import React from 'react'
import { ReactComponent as Add } from '../../Assets/add.svg'

const AddToCartButton = ({ DishID, onCartUpdatedCallback }) => {

  let AddToCart = async () =>
  {
    fetch(`/cart/addDish/${DishID}/`,
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
      <button onClick={AddToCart}>
        <Add />
      </button>
    </div>
  )
}

export default AddToCartButton
