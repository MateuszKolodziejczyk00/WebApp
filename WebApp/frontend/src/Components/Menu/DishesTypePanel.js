import React from 'react'
import DishesList from './DishesList'


const DishesTypePanel = ({dishTypeName, dishesList}) => {
  return (
    <div className = "DishesTypePanel">
        <h2 className = "DishesTypeName">{dishTypeName}</h2>
        <DishesList dishes = { dishesList } />
    </div>
  )
}

export default DishesTypePanel
