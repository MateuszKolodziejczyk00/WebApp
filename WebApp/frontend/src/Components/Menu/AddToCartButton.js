import React from 'react'

const AddToCartButton = ({ DishID }) => {

  let AddToCart = async () =>
  {
    fetch('/cart/addDish/1/',
    {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return (
    <div>
      <button onClick={AddToCart}>Add To Cart</button>
    </div>
  )
}

export default AddToCartButton
