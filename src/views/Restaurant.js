import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Flexbox = styled.div`
  display: flex
  flex-direction: row;
  justify-content: space-around
`

const Column = styled.div`
  flex: 50%;
  padding: 25px;
  text-align: center;
  font-size: 20px;
  overflow: auto;

`

const RestaurantName = styled.h1`
  text-align: center;
  font-size: 45px;
`
// function Restaurant() {
//   const [eatery, setEatery] = useState( {} );

//   useEffect(async() => {
//     const { match: { params } } = this.props;
//     const response = await axios.get(`/api/restaurants/${params.restaurantID}`)
//     console.log(response.data)
//     setEatery(response.data)
//   })
  
//   // const dishes = eatery.dishes.map(dish => <h4>{dish.name}</h4>)

//   return(
//     <div>
//       <h1>{eatery.name}</h1>
//     </div>
//   )
// }

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
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
        <h3>{dish.name}</h3>
      )
      return(
        <div>
          <RestaurantName>{this.state.restaurant.name}</RestaurantName>
          <Flexbox>
            <Column> 
              {dishes}
              {dishes}
              {dishes}
              {dishes}
            </Column>
            <Column>
              {dishes}
              {dishes}
              {dishes}
              {dishes}
            </Column>
          </Flexbox>
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