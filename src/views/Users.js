import React from 'react'
import axios from 'axios'
import User from '../components/User'
import styled from 'styled-components'

const Flexbox = styled.div`
  background-size: cover
  display: flex
  flex-direction: row;
  justify-content: space-around
  align-items: center;
  flex-wrap: wrap;
`
class Users extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(response => 
        this.setState({
          users: response.data
        })
     )
  }

  render(){
    
    const people = this.state.users.map(person => 
      <User
        key = {person.id}
        userInfo = {person}
      />)

    return(
      <Flexbox>
        {people}
      </Flexbox>
    )
  }

}

export default Users