import React from 'react'

import { Link } from 'react-router-dom'
import Signin from '../components/signin'

import axios from 'axios'

const submit = (e, formState, setErrorMessage, history) => {
  e.preventDefault()

  if (!formState.username || !formState.password) {
    setErrorMessage('Les champs ne doivent pas être vides')
    return
  }

  axios({
    method: 'POST',
    url: 'https://easy-login-api.herokuapp.com/users/login',
    data: {
      username: formState.username,
      password: formState.password
    }
  })
    .then(res => {
      localStorage.setItem('token', res.headers['x-access-token'])
      history.push('/home/20')
    })
    .catch(err => {
      setErrorMessage('Une erreur est survenue')
      console.log(err)
    })
}

const Login = props => {
  console.log('Login => props', props)
  return (
    <div>
      <Signin submit={submit}></Signin>
      <p>login</p>
      <Link to='/home/20'>To home</Link>
      <button onClick={() => props.history.push('/home/20')}>To home</button>
    </div>
  )
}

export default Login
