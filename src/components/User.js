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
  padding: 15px 20px;
`

function User(props) {
  return(
    <Card>
      <h4>My name is {props.userInfo.name}</h4>
      <h5>Hit me up at {props.userInfo.email}</h5>
    </Card>
  )
}

export default User