import React from 'react'

const DishInCart = ({dish}) => {
  return (
    <div>
      <h4>{ dish.name }</h4>
      <h4>{ dish.num }</h4>
      <h4>{ dish.price }</h4>
    </div>
  )
}

export default DishInCart
