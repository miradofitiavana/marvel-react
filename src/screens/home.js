import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Header from '../components/header/index'
import Pagination from '../components/pagination/index'

import md5 from 'md5'

import privateKey from '../.secret'

const Home = props => {
  const valueOffset = 20
  const [currentPage, setCurrentPage] = useState(0)
  const [total, setTotal] = useState(0)

  const [charactersList, setCharactersList] = useState([])
  useEffect(() => {
    const publicKey = 'bb4708a620c8ba9a2c30a9494a8cb4e4'
    const timeStamp = new Date().getMilliseconds()
    const hash = md5(`${timeStamp}${privateKey}${publicKey}`)
    const generatedUrl = 'https://gateway.marvel.com/v1/public/characters'

    axios({
      method: 'GET',
      url: generatedUrl,
      params: {
        ts: timeStamp,
        apikey: publicKey,
        hash: hash,
        offset: valueOffset + currentPage
      }
    })
      .then(res => {
        console.log(res)
        setCharactersList(res.data.data.results)
        setTotal(res.data.data.total)
      })
      .catch(err => {
        console.log(err)
      })
  }, [currentPage])

  return (
    <div>
      <Header></Header>
      <p>home</p>
      {charactersList.map(character => (
        <p>{character.name}</p>
      ))}
      <Pagination
        total={total}
        setCurrentPage={setCurrentPage}
        valueOffset={valueOffset}
      ></Pagination>
    </div>
  )
}

export default Home
