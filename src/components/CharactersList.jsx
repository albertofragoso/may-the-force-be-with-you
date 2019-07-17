import React from 'react'
import CharacterListItem from './CharacterListItem'

import './styles/ChararctersList.css'

const CharactersList = ({ characters, onOpen }) => (
  <ul className="list-unstyled">
    {
      characters.map((character, id) => {
        return(
          <li key={id} className="CharactersListItem">
            <CharacterListItem character={character} onOpen={onOpen}/>
          </li>
        )
      })
    }
  </ul>
)

export default CharactersList