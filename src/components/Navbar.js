import React from 'react'
import { Link } from 'react-router-dom'
import Restaurants from './Restaurants'
import Users from './Users'
import '../App.css'

function Navbar() {
  const navStyle = {
    color: "red"
  }
  return(
    <nav>
      <ul className="App-link">
        <Link style={ navStyle } to="/restaurants" component={ Restaurants }>
          <li> Restaurants </li>
        </Link>
        <Link style={ navStyle } to="/users" component={ Users }>
          <li> Users </li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar