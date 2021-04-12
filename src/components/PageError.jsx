import React from 'react'

import './styles/PageError.css'

const PageError = ({ error }) => (
  <div className="PageError">
    <h3>{error} <span aria-label='emoji' role='img'>❌</span></h3>
  </div>
)

export default PageError