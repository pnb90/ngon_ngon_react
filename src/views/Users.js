import React from 'react'
import axios from 'axios'
import User from '../components/User'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-size: cover
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
      <Wrapper>
        {people}
      </Wrapper>
    )
  }

}

export default Users