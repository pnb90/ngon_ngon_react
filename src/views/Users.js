import React from 'react'
import axios from 'axios'
import User from '../components/User'

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
    return(
      <div>
        <User 
          users = {this.state.users}
        />
      </div>
    )
  }

}

export default Users