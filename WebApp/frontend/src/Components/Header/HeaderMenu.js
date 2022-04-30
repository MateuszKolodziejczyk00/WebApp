import React from 'react'
import { Link } from 'react-router-dom'
import MenuElement from './MenuElement'

const HeaderMenu = () => {
  return (
    <div className = "HeaderMenu">
        <MenuElement name={"Home"} linkTo={"/"} />
        <MenuElement name={"Menu"} linkTo={"/Menu"} />
        <MenuElement name={"Reservation"} linkTo={"/Reservation"} />
    </div>
  )
}

export default HeaderMenu
