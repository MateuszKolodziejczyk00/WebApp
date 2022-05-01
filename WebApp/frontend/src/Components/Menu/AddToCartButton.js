import React from 'react'

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
      <button onClick={AddToCart}>Add To Cart</button>
    </div>
  )
}

export default AddToCartButton
