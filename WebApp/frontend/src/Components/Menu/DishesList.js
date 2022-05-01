import React from 'react'
import Dish from './Dish'

const DishesList = ({dishes, dishAttributesFilterSet, onCartUpdatedCallback}) =>
{
  var shouldShowDish = (dish) =>
  {
    if(dishAttributesFilterSet.size == 0)
    {
      return true;
    }
    else
    {
      var dishAttributes = dish.attributes

      for(var i = 0; i < dishAttributes.length; i++)
      {
        if(dishAttributesFilterSet.has(dishAttributes[i].name))
        {
          return true
        }
      }

      return false
    }
  }

  return (
    <div className  = "DishesList">
        {
            dishes.map((dish, index) => 
            (
                  shouldShowDish(dish) ? <Dish key = {index} dish = { dish } onCartUpdatedCallback = { onCartUpdatedCallback } /> : null
            ))
        }
    </div>
  )
}

export default DishesList
