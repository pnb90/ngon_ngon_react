import React from 'react'
import axios from 'axios'
import RestaurantsComponent from '../components/Restaurants'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-size: cover
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

    const eateries = this.state.restaurants.map(restaurant =>
      <RestaurantsComponent
        key = {restaurant.id} 
        restaurantInfo = {restaurant}
      /> 
      )

    return(
      <Wrapper>
        {eateries}
      </Wrapper>
    )
  }
}

export default Restaurants