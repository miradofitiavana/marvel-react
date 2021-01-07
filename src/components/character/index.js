import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Character = ({ character }) => {
  const [isFav, setFav] = useState(false)

  const handleFavorite = hero => {
    const currentFavorite = localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite'))
      : []

    const isPresent = currentFavorite.map(e => e.id).indexOf(hero.id)

    setFav(isPresent != -1)

    if (isPresent === -1) {
      currentFavorite.push(hero)
      localStorage.setItem('favorite', JSON.stringify(currentFavorite))
    } else {
      const filteredCharacters = currentFavorite.filter(
        character => character.id !== hero.id
      )
      localStorage.setItem('favorite', JSON.stringify(filteredCharacters))
    }
  }

  return (
    <CharacterContainer>
      <CharacterImage>
        <Image
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        ></Image>
      </CharacterImage>
      <CharacterName>
        <Name>
          <Link to={`/characters/${character.id}`}>{character.name}</Link>
        </Name>
        <button
          onClick={() =>
            handleFavorite({
              id: character.id,
              name: character.name,
              thumbnail: character.thumbnail
            })
          }
        >
          Favorsi
        </button>
      </CharacterName>
    </CharacterContainer>
  )
}

const CharacterImage = styled.div`
  align-items: center;
  justify-content: center;
`
const Image = styled.img`
  max-height: 300px;
  object-fit: cover;
  width: 100%;
  object-position: top;
`

const CharacterName = styled.div`
  align-items: center;
  justify-content: center;
`
const Name = styled.p`
  transition: all 0.5s;
  padding: 15px;
  text-align: center;
  transform: translateY(0px);
  font-size: 18px;
`

const CharacterContainer = styled.div`
  border-radius: 5px;
  grid-template-rows: 2fr 1fr;
  grid-gap: 10px;
  cursor: pointer;
  border: 3px dotted #424242;
  transition: all 0.6s;

  &:hover {
    border: 3px solid #f2f2f2;

    ${Name} {
      transform: translateY(-10px);
      font-weight: 600;
    }
  }
`

Character.character = {
  character: PropTypes.object
}

export default Character
