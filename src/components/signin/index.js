import React, { useState } from 'react'
import styled from 'styled-components'

import { useHistory } from 'react-router-dom'

const Signin = ({ submit }) => {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')

  const history = useHistory()

  return (
    <StyledForm onSubmit={e => submit(e, formState, setErrorMessage, history)}>
      <StyledSpan>Signin</StyledSpan>
      <SigninInput
        onChange={e => setFormState({ ...formState, username: e.target.value })}
        placeholder='Username'
        type='text'
      ></SigninInput>
      <SigninInput
        onChange={e => setFormState({ ...formState, password: e.target.value })}
        placeholder='Password'
        type='password'
      ></SigninInput>
      <StyledSpan>{errorMessage}</StyledSpan>
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
