import React, { Component } from 'react'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import FilmsList from '../components/FilmsList'
import FilmsService from '../services/Films'
import OpeningModal from '../components/OpeningModal'

import './styles/Films.css'

const filmsService = new FilmsService()

class Films extends Component {
  _isMounted = false;

  state = {
    films: undefined,
    loading: true,
    error: null,
    modalIsOpen: false,
    openingCrawl: ''
  }

  componentDidMount() {
    this._isMounted = true;

    this.setState({ loading: true, error: null })

    filmsService
      .films()
      .then(response => {
        if (this._isMounted) {
          this.setState({ films: response.results, loading: false, error: null })
        }
      })
      .catch(error => this.setState({ loading: false, error }))
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleOpen = (e, openingCrawl) => this.setState({ modalIsOpen: true, openingCrawl })

  handleClose = e => this.setState({ modalIsOpen: false, openingCrawl: '' })

  render() {
    const { films, loading, error, modalIsOpen,  openingCrawl } = this.state

    if(loading && !films) return <PageLoading />

    if(error) return <PageError error={error} />

    return(
      <div>
        <div className="Films">
          <div className="Films__hero">
            <div className="Films__container">
              <h1 className="font-weight-light">May the force be with you. ✨</h1>
            </div>
          </div>
        </div>
        <div className="Films__container">
          <h1>Films</h1>
          <FilmsList films={films} onOpen={this.handleOpen} />
        </div>
        <OpeningModal modalIsOpen={modalIsOpen} onClose={this.handleClose} openingCrawl={openingCrawl} />
      </div>
    )
  }
}

export default Films