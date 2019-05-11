import React from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Users from './components/Users';
import Restaurants from './components/Restaurants';


class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/restaurants" component={Restaurants} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App