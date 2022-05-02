import React from 'react'
import { Link } from 'react-router-dom'
import MenuElement from './MenuElement'

const HeaderMenu = () => {
  return (
    <div className = "HeaderMenu">
        <MenuElement name={"O nas"} linkTo={"/"} />
        <MenuElement name={"Menu"} linkTo={"/Menu"} />
        <MenuElement name={"Rezerwacja"} linkTo={"/Reservation"} />
        <MenuElement name={"Kontakt"} linkTo={"/Contact"} />
    </div>
  )
}

export default HeaderMenu
