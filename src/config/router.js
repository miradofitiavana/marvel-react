import React from 'react'

import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Login from '../screens/login'
import Home from '../screens/home'
import Characters from '../screens/characters'

import PrivateRoute from '../utils/privateRoute'
import Header from '../components/header'
import Favorite from '../screens/favorite'

const Routes = () => {
  return (
    <Router>
      {localStorage.getItem('token') ? <Header></Header> : null}
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute path='/home' component={Home} />
        <PrivateRoute path='/favorite' component={Favorite} />
        <PrivateRoute path='/characters/:id' component={Characters} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
