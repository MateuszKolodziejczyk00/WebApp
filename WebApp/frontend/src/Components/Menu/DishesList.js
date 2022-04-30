import React from 'react'
import Dish from './Dish'

const DishesList = ({dishes}) => {
  return (
    <div>
        {
            dishes.map((dish) => 
            (
                <Dish dish = { dish } />
            ))
        }
    </div>
  )
}

export default DishesList
