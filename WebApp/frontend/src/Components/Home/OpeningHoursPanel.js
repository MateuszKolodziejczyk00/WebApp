import React from 'react'
import OpeningHour from './OpeningHour'

const OpeningHoursPanel = () => {
  return (
    <div className = "OpeningHoursPanel">
      <h1 className = "OpeningHoursTitle">GodzinyOtwarcia</h1>
      <OpeningHour days = {"Poniedziałek - Piątek"} hours = {"9:00 - 22:00"} />
      <OpeningHour days = {"Sobota"} hours = {"12:00 - 23:00"} />
    </div>
  )
}

export default OpeningHoursPanel
