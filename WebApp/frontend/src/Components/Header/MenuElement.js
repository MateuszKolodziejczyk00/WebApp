import React from 'react'
import { Link } from 'react-router-dom'

const MenuElement = ({name, linkTo}) => {
  return (
    <div>
        <Link to = {linkTo}A>
            <h3>{name}</h3>
        </Link>
    </div>
  )
}

export default MenuElement
