import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'


function User(props) {
  const [user, setUser] = useState(" ");

  useEffect(async() => {
    const userID = props.match.params.userID
    const response = await axios.get("/api/users/" + userID)
    setUser(response.data)
  }, []);

  return(
    <div>
      <h1>Welcome back, {user.name}!</h1>
    </div>
  )

}

export default User