import React from 'react';
import ReactDOM from 'react-dom';
import '.index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound';


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/restaurants" component={Restaurants} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  )

ReactDOM.render(routing, document.getElementById('root'))