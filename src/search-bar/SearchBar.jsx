import React from 'react'
import './SearchBar.css'
const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-item">
        <span className="label">Where</span>
        <input type="text" placeholder="Search destinations" />
      </div>
      <div className="search-item">
        <span className="label">Check in</span>
        <input type="text" placeholder="Add dates" />
      </div>
      <div className="search-item">
        <span className="label">Check out</span>
        <input type="text" placeholder="Add dates" />
      </div>
      <div className="search-item">
        <span className="label">Who</span>
        <input type="text" placeholder="Add guests" />
      </div>
      <div className="search-button">
        <button>
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>
  )
}

export default SearchBar