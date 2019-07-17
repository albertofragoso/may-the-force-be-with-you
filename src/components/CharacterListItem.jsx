import React from 'react'

import './styles/CharacterListItem.css'

const CharacterListItem = ({ character, onOpen }) => (
  <div className="CharacterListItem__container">
    <div className="CharacterListItem__info">
      <strong> {character.name} </strong>  
      <br />Eye color: {character.eye_color}
      <br />Gender: {character.gender}
      <br />
    </div>
  </div>
)

export default CharacterListItem