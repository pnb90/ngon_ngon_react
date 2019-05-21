import React from 'react'
import axios from 'axios'
import RestaurantsComponent from '../components/Restaurants'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'


const Flexbox = styled.div`
  display: flex
  flex-direction: row;
  justify-content: space-around
  align-items: center;
`

const Hyperlink = styled(Link)`
  text-decoration: none;
`

class Restaurants extends React.Component {
  constructor() {
    super()
    this.state = {
      restaurants: []
    }
  }
  
  componentDidMount() {
    axios.get('/api/restaurants')
      .then(response => {
        this.setState({
          restaurants: response.data
        })
      })
  }

  render() {

    const eateries = this.state.restaurants.map(restaurant => {
      return(
        <div>
          <Hyperlink
          to={"/restaurants/" + restaurant.id}
          >
            <RestaurantsComponent
            key = {restaurant.id} 
            restaurantInfo = {restaurant}
            /> 
          </Hyperlink>
        </div>
      )
    })

    return(
      <Flexbox>
        {eateries}
      </Flexbox>
    )
  }
}

export default Restaurants