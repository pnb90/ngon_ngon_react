import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';
import RestaurantIcon from '@material-ui/icons/Restaurant'

const MarkerIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

function Map(props) {
  const [viewport, setViewport] = useState({
    latitude: 41.8756,
    longitude: -87.6244,
    zoom: 12,
    width: '60vw',
    height: '70vh',
  })
  
  const [selectedRestaurant, setSelectedRestaurant] = useState( null )
  
  // Allows user to press escape to exit out of popup window
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
  
  var restaurantInfo = null

  if (props.searchRestaurants.dataFromChild) {
    restaurantInfo = props.searchRestaurants.dataFromChild
  }
  else if(props.restaurantLocation) {
    restaurantInfo = props.restaurantLocation
  } 
  else {
    return(
      <CircularProgress />
    )
  }

  const displayRestaurants = restaurantInfo.map(business => 
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
          <RestaurantIcon />
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
         {displayRestaurants}
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
               <h5>{selectedRestaurant.location.display_address[0]} <br />
               {selectedRestaurant.location.display_address[1]}
               </h5>
             </div>
           </Popup>
       )}
       </ReactMapGL>
    </div>
  )
}

export default Map
