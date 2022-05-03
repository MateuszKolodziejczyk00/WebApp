import React from 'react'

const OpeningHour = ({ days, hours }) => {
  return (
    <div className = "OpeningHour">
      <div className = "Days">
        <h2>{ days }</h2>
      </div>
      <div className= "Hours">
        <h2>{ hours }</h2>
      </div>
    </div>
  )
}

export default OpeningHour
