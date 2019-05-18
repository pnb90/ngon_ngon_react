import React from 'react'

function User(props) {
  return(
    <div>
      <h3>My name is {props.userInfo.name}</h3>
      <h4>Hit me up at {props.userInfo.email}</h4>
    </div>
  )
}

export default User