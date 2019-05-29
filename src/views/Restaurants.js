import React, { useState, useEffect } from 'react'
import axios from 'axios'
import RestaurantsComponent from '../components/Restaurants'
import styled from 'styled-components'
import {Link}  from 'react-router-dom'
import RestaurantMap from '../components/Map'

const Flexbox = styled.div`
  display: flex
  flex-direction: row;
  justify-content: space-around
  align-items: center;
`

const Hyperlink = styled(Link)`
  text-decoration: none;
  font-color: black;
`

function Restaurants() {
  const [eateries, setEateries] = useState( [] );

  useEffect(async() => {
    const response = await axios.get("/api/restaurants")
    setEateries(response.data)
  }, []);

  const placeToEat = eateries.map(eatery => {
    return(
      <div>
        <Hyperlink
          to={"/restaurants/" + eatery.id}
          >
            <RestaurantsComponent
            key = {eatery.id} 
            restaurantInfo = {eatery}
            /> 
          </Hyperlink>
      </div>
    )
  });

  return(
    <Flexbox>
      <RestaurantMap />
    </Flexbox>
  )
}

export default Restaurants