import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/header/index'

const Home = props => {
  console.log('Home => props', props)
  return (
    <div>
      <Header></Header>
      <p>home</p>
      <p>{props.match.params.id}</p>
      <Link to='/'>To login</Link>
    </div>
  )
}

export default Home
