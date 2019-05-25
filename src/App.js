import React from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Restaurant from './views/Restaurant';
import Restaurants from './views/Restaurants';
import Users from './views/Users';
import Reviews from './views/Reviews';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import styled from 'styled-components'

const Background = styled.div`
  background-image: linear-gradient(to right top, #feeed5, #fcdeb9, #fccd9f, #fcbb87, #fda773, #fea176, #fe9b7b, #fd957f, #f79e95, #eea8a8, #e2b3b7, #d5bec2);
  min-height: 100%;
  min-width: 100%;
  background-size: cover;
  position: fixed;
`

class App extends React.Component {
  render() {
    return(
      <Router>
        <Background>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/restaurants/:restaurantID" component={Restaurant} />
            <Route path="/restaurants" component={Restaurants} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Background>
      </Router>
    )
  }
}

export default App