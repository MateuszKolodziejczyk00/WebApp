import React from 'react'
import DishesList from './DishesList'


const DishesTypePanel = ({dishTypeName, dishesList}) => {
  return (
    <div>
        <h2>{dishTypeName}</h2>
        <DishesList dishes = { dishesList } />
    </div>
  )
}

export default DishesTypePanel
