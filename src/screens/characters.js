import axios from 'axios'
import md5 from 'md5'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import privateKey from '../.secret'

const Characters = props => {
  const [character, setCharacter] = useState({})

  const history = useHistory()
  const id = props.match.params.id
  useEffect(() => {
    const publicKey = 'bb4708a620c8ba9a2c30a9494a8cb4e4'
    const timeStamp = new Date().getMilliseconds()
    const hash = md5(`${timeStamp}${privateKey}${publicKey}`)
    const generatedUrl = 'https://gateway.marvel.com/v1/public/characters'

    axios({
      method: 'GET',
      url: `${generatedUrl}/${id}`,
      params: {
        ts: timeStamp,
        apikey: publicKey,
        hash: hash
      }
    })
      .then(res => {
        setCharacter(res.data.data.results[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  return (
    <div>
      <img
        src={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`}
      />
      <p>{character.name}</p>
    </div>
  )
}

export default Characters
