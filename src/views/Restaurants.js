import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {Link}  from 'react-router-dom'
import RestaurantMap from '../components/Map'
import SearchBox from '../components/SearchBox'
import RestaurantResults from '../components/RestaurantResults'


const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Hyperlink = styled(Link)`
  text-decoration: none;
  font-color: black;
`

// https://dev.to/drews256/ridiculously-easy-row-and-column-layouts-with-flexbox-1k01
const mapColumn = styled.div`

`

const searchColumn = styled.div`
`




function Restaurants() {
  const [restaurantLocation, setRestaurantLocation] = useState()

  useEffect(async() => {
    const response = await axios.get("/api/restaurants/data")
    setRestaurantLocation(response.data.data.businesses)
  }, []);

  const [searchRestaurants, setSearchRestaurants] = useState({})
  
  const searchRestaurantCallback = (dataFromChild) => {
    setSearchRestaurants( {dataFromChild} )
  }

  const mapRestaurantCallback = (dataFromChild) => {
    setSearchRestaurants( {dataFromChild} )
  }

    return(
      <Flexbox>
        <mapColumn>
          <RestaurantMap 
            restaurantLocation = {restaurantLocation} 
          />
        </mapColumn>
        <searchColumn>
          <SearchBox searchRestaurantCallback = { searchRestaurantCallback }/>
          <RestaurantResults  searchResults = { searchRestaurants }/>
        </searchColumn>
      </Flexbox>
    )  
  
}

export default Restaurants