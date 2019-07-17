import React from 'react'
import { Link } from 'react-router-dom'

import './styles/FilmsListItem.css'

const FilmListItem = ({ film, id, onOpen }) => (
  <div className="FilmsListItem__container">
    <div className="FilmsListItem__info">
      <strong className="FilmsListItem__info-title" onClick={e => onOpen(e, film.opening_crawl)} >{film.title} </strong>  
      <br />Episode: {film.episode_id}
      <br />Director: {film.director}
      <br />
      <strong>
        <Link to={`${id}/characters`}>Characters</Link>
      </strong>
    </div>
  </div>
)

export default FilmListItem