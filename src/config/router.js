import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Login from '../screens/login'
import Home from '../screens/home'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home/:id' component={Home} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
