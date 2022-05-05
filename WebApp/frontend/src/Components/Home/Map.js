import React from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const RestaurantMap = () =>
{
  return (
    <div className = "MapPanel">
      <Map
        google = {window.google}
        style = {{width: "100%", height: "500px"}}
        zoom = {17}
        initialCenter = {
            {
                lat: 52.236,
                lng: 21.0
            }
        }>
        <Marker position = { {lat: 52.236, lng: 21.0} } />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAfjlxteT5kl7_5Kh9AZneLSQcykMbyuqY"
})(RestaurantMap)
