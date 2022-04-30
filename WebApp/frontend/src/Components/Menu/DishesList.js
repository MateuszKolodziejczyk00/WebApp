import React from 'react'
import Dish from './Dish'

const DishesList = ({dishes}) => {
  return (
    <div className  = "DishesList">
        {
            dishes.map((dish, index) => 
            (
                <Dish key = {index} dish = { dish } />
            ))
        }
    </div>
  )
}

export default DishesList
