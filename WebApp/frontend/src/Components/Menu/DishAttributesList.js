import React from 'react'

const DishAttributesList = ({attributesList}) => {
  return (
    <div className = "DishAttributesList">
    {
        attributesList.map((attribute, index) =>
        (
          <h4 className = "DishAttribute" key = { index }>{ attribute.name }</h4>
        ))
    }
    </div>
  )
}

export default DishAttributesList
