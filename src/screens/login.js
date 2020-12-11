import React from 'react'

import { Link } from 'react-router-dom'
import Signin from '../components/signin'

const Login = props => {
  console.log('Login => props', props)
  return (
    <div>
      <Signin></Signin>
      <p>login</p>
      <Link to='/home/20'>To home</Link>
      <button onClick={() => props.history.push('/home/20')}>To home</button>
    </div>
  )
}

export default Login
