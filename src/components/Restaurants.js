import React from 'react'

class Restaurants extends React.Component {
  constructor() {
    super()
    this.state = {
      restaurants: []
    }
  }

  render() {
    return(
      <div>
        <h3>Name: {this.props.restaurantInfo.name}</h3>
        <h4>Address: {this.props.restaurantInfo.address}</h4>
      </div>
    )
  }
}

export default Restaurants