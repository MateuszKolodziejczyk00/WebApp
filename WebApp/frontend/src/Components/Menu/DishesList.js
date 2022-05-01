import React from 'react'
import Dish from './Dish'

const DishesList = ({dishes, onCartUpdatedCallback}) => {
  return (
    <div className  = "DishesList">
        {
            dishes.map((dish, index) => 
            (
                <Dish key = {index} dish = { dish } onCartUpdatedCallback = { onCartUpdatedCallback } />
            ))
        }
    </div>
  )
}

export default DishesList
