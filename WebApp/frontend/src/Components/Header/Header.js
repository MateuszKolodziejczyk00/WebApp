import React from 'react'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  return (
    <div className = "Header">
        <div className = "RestaurantLogo">
          <div className = "RestaurantName">
            <h1>Restauracja</h1>
          </div>
        </div>
        <HeaderMenu />
    </div>
  )
}

export default Header
