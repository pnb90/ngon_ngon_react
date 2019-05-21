import React from 'react'
import Restaurants from '../components/Restaurants'
import axios from 'axios'


class Restaurant extends React.Component {
  constructor() {
    super()
    this.state = {
      restaurant: {}
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`/api/restaurants/${params.restaurantID}`)
      .then(response => {
        this.setState({
          restaurant: response.data
        })
      })
  }

  render() {
    if(this.state.restaurant.dishes) {
      const dishes = this.state.restaurant.dishes.map(dish =>
        <h4>{dish.name}</h4>
      )
      return(
        <div>
          <h1>{this.state.restaurant.name}</h1>
          {dishes}
        </div>
      )
    } return(
        <div>
          Loading...
        </div>
      )
  }
}

export default Restaurant