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
    return(
      <div>
        <Restaurants 
          restaurantInfo = {this.state.restaurant}
        />
      </div>
    )
  }
}

export default Restaurant