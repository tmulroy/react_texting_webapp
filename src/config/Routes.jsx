import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/Main.jsx';
import Home from '../components/HomePlaceholder.jsx';
import Register from '../components/RegisterUser.jsx';
import Login from '../components/Login.jsx';
import Dashboard from '../components/Dashboard.jsx';
import requireAuth from '../utils/auth.js';


const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
        <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
      </Route>
    </Router>
  )
}

export default Routes;
