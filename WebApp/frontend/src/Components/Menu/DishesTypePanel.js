import React from 'react'
import DishesList from './DishesList'


const DishesTypePanel = ({dishTypeName, dishesList, dishAttributesFilterSet, onCartUpdatedCallback}) => {
  return (
    <div className = "DishesTypePanel">
        <h1 className = "DishesTypeName">{dishTypeName}</h1>
        <img src = "https://cdn.aniagotuje.com/pictures/articles/2022/02/24732294-v-1080x1080.jpg" width = "720" height = "720" />
        <DishesList dishes = { dishesList } dishAttributesFilterSet = { dishAttributesFilterSet } onCartUpdatedCallback = { onCartUpdatedCallback } />
    </div>
  )
}

export default DishesTypePanel
