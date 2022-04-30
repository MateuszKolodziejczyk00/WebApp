import React from 'react'

const Dish = ({ dish }) => {
  return (
    <div>
        <h4>{dish.name}</h4>
        <h4>{dish.price}</h4>
    </div>
  )
}

export default Dish
