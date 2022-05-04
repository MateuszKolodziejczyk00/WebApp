import React from 'react'
import MenuElement from './MenuElement'

const HeaderMenu = () => {
  return (
    <div className = "HeaderMenu">
        <MenuElement name={"O Nas"} linkTo={"/"} />
        <MenuElement name={"Menu"} linkTo={"/Menu"} />
        <MenuElement name={"Rezerwacja"} linkTo={"/Reservation"} />
    </div>
  )
}

export default HeaderMenu
