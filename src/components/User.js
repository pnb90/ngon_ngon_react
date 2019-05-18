import React from 'react'

function User(props) {
  return(
    <div>
      <h4>My name is {props.userInfo.name}</h4>
      <h5>Hit me up at {props.userInfo.email}</h5>
    </div>
  )
}

export default User