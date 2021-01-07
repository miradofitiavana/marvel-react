import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Character from '../components/character'

const Favorite = () => {
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem('favorite')))

  useEffect(() => {})

  return (
    <div>
      <p>favoris</p>
      <CharacterListContainer>
        {fav.map((character, index) => (
          <Character key={index} character={character}></Character>
        ))}
      </CharacterListContainer>
    </div>
  )
}

const CharacterListContainer = styled.div`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`

export default Favorite
