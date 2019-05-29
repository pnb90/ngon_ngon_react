import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import axios from 'axios'
import styled from 'styled-components'

const MarkerIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`
function Map() {
  const [viewport, setViewport] = useState({
    latitude: 41.8756,
    longitude: -87.6244,
    zoom: 12,
    width: '80vw',
    height: '75vh'
  })
  
  const [selectedRestaurant, setSelectedRestaurant] = useState( null )

  const [restaurantLocation, setRestaurantLocation] = useState( [] )

  useEffect(async() => {
    const response = await axios.get("/api/restaurants/data")
    setRestaurantLocation(response.data)
  }, []);

  useEffect(() => {
    const listener = event => {
      if (event.key === "Escape") {
        setSelectedRestaurant(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);


  if(restaurantLocation.data) {
    const restaurantInfo = restaurantLocation.data.businesses.map(business => 
      <Marker
        latitude = {business.coordinates.latitude}
        longitude = {business.coordinates.longitude}
      >
        <MarkerIcon
          onClick={event => {
            event.preventDefault()
            setSelectedRestaurant(business)
          }}
        >
          🍔
        </MarkerIcon>
      </Marker>
    )
    return(
      <div>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle='mapbox://styles/phuocbui90/cjw86awmf5d8s1co3h5kblj2x'
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
          {restaurantInfo}
          {selectedRestaurant && (
            <Popup
              latitude = {selectedRestaurant.coordinates.latitude}
              longitude = {selectedRestaurant.coordinates.longitude}
              onClose = {() => {
                setSelectedRestaurant( null )
              }}
            >
              <div>
                <h4>{selectedRestaurant.name}</h4>
                <h5>{selectedRestaurant.location.display_address}</h5>
              </div>
            </Popup>
        )}
        </ReactMapGL>
      </div>
    )
  } else {
    return(
      <div>
        loading...
      </div>
    )
  }
}

export default Map