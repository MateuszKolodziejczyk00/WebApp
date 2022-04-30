import React from 'react'

const DishAttributesList = ({attributesList}) => {
  return (
    <div className = "DishAttributesList">
    {
        attributesList.map((attribute) =>
        (
          <h5 className = "DishAttribute">{ attribute.name }</h5>
        ))
    }
    </div>
  )
}

export default DishAttributesList
