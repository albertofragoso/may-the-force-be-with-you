import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Navbar.css'

const Nav = () => (
  <div className="Navbar">
    <div className="container-fluid">
      <Link to="/" className="Navbar_brand">
        <span className="font-weight-bold">StarWars</span>
      </Link>
    </div>
  </div>
)

export default Nav