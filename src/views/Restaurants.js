import React from 'react'
import styled from 'styled-components'
import {Link}  from 'react-router-dom'
import RestaurantMap from '../components/Map'
import SearchBox from '../components/SearchBox'
import RestaurantResults from '../components/RestaurantResults'


const Flexbox = styled.div`
  display: flex
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Hyperlink = styled(Link)`
  text-decoration: none;
  font-color: black;
`

// https://dev.to/drews256/ridiculously-easy-row-and-column-layouts-with-flexbox-1k01
const mapColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`

const searchColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`

function Restaurants() {
  return(
    <Flexbox>
      <mapColumn>
        <RestaurantMap />
      </mapColumn>
      <searchColumn>
        <SearchBox />
        <RestaurantResults />
      </searchColumn>
    </Flexbox>
  )
}

export default Restaurants