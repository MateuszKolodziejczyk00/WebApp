import React from 'react'
import DishesList from './DishesList'


const DishesTypePanel = ({dishTypeName, imageSource, dishesList, dishAttributesFilterSet, onCartUpdatedCallback}) => {
  return (
    <div className = "DishesTypePanel">
        <h1 className = "DishesTypeName">{dishTypeName}</h1>
        <img className = "DishesTypeImage" src = { imageSource }  />
        <DishesList  dishes = { dishesList } dishAttributesFilterSet = { dishAttributesFilterSet } onCartUpdatedCallback = { onCartUpdatedCallback } />
    </div>
  )
}

export default DishesTypePanel
