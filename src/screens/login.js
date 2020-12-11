import React, { useEffect } from 'react'

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
      history.push('/home')
    })
    .catch(err => {
      setErrorMessage('Une erreur est survenue')
      console.log(err)
    })
}

const Login = ({ history }) => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      history.push('/home')
    }
  }, [])
  return (
    <div>
      <Signin submit={submit}></Signin>
    </div>
  )
}

export default Login
