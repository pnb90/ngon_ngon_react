import React from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Restaurant from './views/Restaurant';
import Restaurants from './views/Restaurants';
import Users from './views/Users';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/restaurants/:restaurantID" component={Restaurant} />
            <Route path="/restaurants" component={Restaurants} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App