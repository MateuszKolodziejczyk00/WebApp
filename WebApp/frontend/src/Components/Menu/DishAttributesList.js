import React from 'react'

const DishAttributesList = ({attributesList}) => {
  return (
    <div className = "DishAttributesList">
    {
        attributesList.map((attribute, index) =>
        (
          <h5 className = "DishAttribute" key = { index }>{ attribute.name }</h5>
        ))
    }
    </div>
  )
}

export default DishAttributesList
