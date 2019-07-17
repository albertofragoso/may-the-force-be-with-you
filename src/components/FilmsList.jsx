import React from 'react'
import FilmListItem from './FilmListItem'

import './styles/FilmsList.css'

const FilmList = ({ films, onOpen }) => (
  <ul className="list-unstyled">
    {
      films.sort((a, b) => a.release_date > b.release_date ? 1 : a.release_date < b.release_date ? -1 : 0).map((film, id) => {
        return(
          <li key={film.episode_id} className="FilmsListItem">
            <FilmListItem film={film} id={id + 1} onOpen={onOpen}/>
          </li>
        )
      })
    }
  </ul>
)

export default FilmList

