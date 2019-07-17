import React from 'react'

const SearchBar  = ({ onSearch }) => (
  <div className="form-group">
    <input className="form-control" type="text" placeholder="Filter characters . . ." onChange={onSearch} />
  </div>
)

export default SearchBar