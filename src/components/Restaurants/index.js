import React from 'react'
import { Card, RestaurantName } from './style'

class Restaurants extends React.Component {
  constructor() {
    super()
    this.state = {
      restaurants: []
    }
  }

  render() {
    return(
      <Card>
        <RestaurantName>
          {this.props.restaurantInfo.name} 
        </RestaurantName>
      </Card>
    )
  }
}

export default Restaurants