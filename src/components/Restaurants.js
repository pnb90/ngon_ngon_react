import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 150px;
  height: 100px;
  border: 1px solid black;
  margin: 25px 25px;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const RestaurantName = styled.h2`
  text-align: center;
  font-size: 100;
`

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