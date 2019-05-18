import React from 'react'

function User(props) {
  return(
    <div>
      <h1>HEY I'M User</h1>
      <h1>{console.log(props.users)}</h1>
    </div>
  )
}

export default User