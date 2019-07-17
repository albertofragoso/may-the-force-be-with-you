import React from 'react'

const Pagination = ({ charactersPerPage, totalCharacters, paginate  }) => {
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i)
  }

  return(
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => {
          return(
            <li key={number} className="page-item">
              <a href="#" onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          )
        })}
      </ul>     
    </nav>
  )
}

export default Pagination

