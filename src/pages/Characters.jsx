import React, { Component } from 'react'
import FilmsService from '../services/Films' 
import OpeningModal from '../components/OpeningModal'
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import CharactersList from '../components/CharactersList'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'

import './styles/Characters.css'

const filmsService = new FilmsService()

class Characters extends Component {
  _isMounted = false;

  state = {
    film: undefined,
    characters: [],
    tempCharacters: [],
    loading: true,
    error: null,
    modalIsOpen: false,
    openingCrawl: '',
    currentPage: 1,
    charactersPerPage: 10
  }

  componentDidMount() {
    this._isMounted = true;

    const { id } = this.props.match.params

    this.setState({ loading: true, error: null })

    filmsService
      .film(id)
      .then(response => {
        if (this._isMounted) {
          this.setState({ film: response, loading: true, error: null })
          response.characters.map(character => {
            const idCharater = +character.match(/\d+/)[0]
            return filmsService
                    .character(idCharater)
                    .then(response => this.setState(prevState => ({
                      characters: [...prevState.characters, response],
                      tempCharacters: [...prevState.tempCharacters, response],
                      loading: false,
                      error: null
                    })))
                    .catch(error => this.setState({ loading: false, error }))
          })
        }
      })
      .catch(error => this.setState({ loading: false, error }))
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleOpen = (e, openingCrawl) => this.setState({ modalIsOpen: true, openingCrawl })

  handleClose = e => this.setState({ modalIsOpen: false })

  handleSearch = e => {
    const { characters, tempCharacters } = this.state
    if(e.target.value) {
      const filterCharacters = characters.filter(character => 
        character.name.toLowerCase().includes(e.target.value.toLowerCase()) || 
        character.eye_color.toLowerCase().includes(e.target.value.toLowerCase()) || 
        character.gender.toLowerCase().includes(e.target.value.toLowerCase()))
      this.setState({ characters: filterCharacters })
    } else {
      this.setState({ characters: tempCharacters })
    }
  }

  paginate = pageNumber => this.setState({ currentPage: pageNumber })

  render() {
    const { film, characters, loading, error, modalIsOpen, openingCrawl, currentPage, charactersPerPage } = this.state

    if(loading && !film && !characters.length) return <PageLoading />

    if(error) return <PageError error={error}/>

    const indexOfLastCharacter = currentPage * charactersPerPage
    const indexOfFirstPost = indexOfLastCharacter - charactersPerPage
    const currentCharacters = characters.slice(indexOfFirstPost, indexOfLastCharacter)

    return(
      <div>
        <div className="Characters">
          <div className="Characters__hero">
            <div className="Characters__container"> 
              <h1 className="Characters__container-title font-weight-light" onClick={e => this.handleOpen(e, film.opening_crawl)}> {film.title} ✨</h1>
            </div>
          </div> 
        </div>
        <div className="Characters__container">
          <h1>Characters</h1>
          <SearchBar onSearch={this.handleSearch}/>
          <Pagination charactersPerPage={charactersPerPage} totalCharacters={characters.length} paginate={this.paginate} />
          <CharactersList characters={currentCharacters} onOpen={this.handleOpen}/>
        </div>
        <OpeningModal modalIsOpen={modalIsOpen} onClose={this.handleClose} openingCrawl={openingCrawl} />
      </div>
    )
  }
}

export default Characters
