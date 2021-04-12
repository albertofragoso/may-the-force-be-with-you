import axios from 'axios'

const baseURL = 'https://swapi.dev/api/'

class FilmsService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: false
    })
  }

  films = () => {
    return this.service
      .get('films/')
      .then(({ data }) => data)
      .catch(err => err)
  }

  film = id => {
    return this.service
      .get(`films/${id}/`)
      .then(({ data }) => data)
      .catch(err => err)
  }

  character = id => {
    return this.service
      .get(`people/${id}/`)
      .then(({ data }) => data)
      .catch(err => err)
  }
}

export default FilmsService