import React, { useState, useEffect } from 'react'
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

function Users() {
  const [users, setUsers] = useState( [] );

  useEffect(async() => {
    const response = await axios.get("/api/users")
    setUsers(response.data)
  }, []);

  const people = users.map(person => 
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

export default Users