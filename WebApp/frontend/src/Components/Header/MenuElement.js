import React from 'react'
import { Link } from 'react-router-dom'

const MenuElement = ({name, linkTo}) => {
  return (
    <div class = "HeaderMenuElement">
        <Link to = {linkTo}>
            <h2>{name}</h2>
        </Link>
    </div>
  )
}

export default MenuElement
