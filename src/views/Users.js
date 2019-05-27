import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from '../components/User'
import styled from 'styled-components'
import {Link}  from 'react-router-dom'


const Flexbox = styled.div`
  background-size: cover
  display: flex
  flex-direction: row;
  justify-content: space-around
  align-items: center;
  flex-wrap: wrap;
`

const Hyperlink = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    font-size: 17px;
  }
`

function Users() {
  const [users, setUsers] = useState( [] );

  useEffect(async() => {
    const response = await axios.get("/api/users")
    setUsers(response.data)
  }, []);

  const people = users.map(person => 
    <Hyperlink to={"/users/" + person.id}>

    </Hyperlink>
  )

  return(
    <Flexbox>
      {people}
    </Flexbox>
  )
}

export default Users

// <User
//   key = {person.id}
//   userInfo = {person}
// />