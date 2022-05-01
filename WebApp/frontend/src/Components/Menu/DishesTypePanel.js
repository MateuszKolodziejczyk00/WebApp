import React from 'react'
import DishesList from './DishesList'


const DishesTypePanel = ({dishTypeName, dishesList, dishAttributesFilterSet, onCartUpdatedCallback}) => {
  return (
    <div className = "DishesTypePanel">
        <h2 className = "DishesTypeName">{dishTypeName}</h2>
        <DishesList dishes = { dishesList } dishAttributesFilterSet = { dishAttributesFilterSet } onCartUpdatedCallback = { onCartUpdatedCallback } />
    </div>
  )
}

export default DishesTypePanel
