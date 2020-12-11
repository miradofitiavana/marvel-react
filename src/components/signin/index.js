import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { useHistory } from 'react-router-dom'

const Signin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const submit = e => {
    e.preventDefault()
    console.log(username)
    console.log(password)

    axios({
      method: 'POST',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data: {
        username,
        password
      }
    })
      .then(res => {
        localStorage.setItem('token', res.headers['x-access-token'])
        history.push('/home/20')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <StyledForm onSubmit={submit}>
      <StyledSpan>Signin</StyledSpan>
      <SigninInput
        onChange={e => setUsername(e.target.value)}
        placeholder='Username'
        type='text'
      ></SigninInput>
      <SigninInput
        onChange={e => setPassword(e.target.value)}
        placeholder='Password'
        type='password'
      ></SigninInput>
      <SigninInput type='submit'></SigninInput>
    </StyledForm>
  )
}

const StyledSpan = styled.span`
  color: green;
  margin-bottom: 12px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SigninInput = styled.input`
  margin: 6px 0px;
  border-radius: 12px;
  border: none;
  background-color: #222222;
  height: 30px;
  color: #fff;
  padding: 0px 6px;
`

export default Signin
