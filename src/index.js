import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

// Containers
import Full from './containers/Full/'

import Login from './views/Login/'
import Register from './views/Register/'

const history = createBrowserHistory();

ReactDOM.render((
  <HashRouter history={history}>
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route path="/" name="Home" component={Full}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'))
