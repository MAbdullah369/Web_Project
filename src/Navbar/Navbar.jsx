//rafce
import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
   <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="img3.png" alt="airbnb logo" />
        </div>

        <div className="navbar-links">
          <a href="#" className="nav-link">Stays</a>
          <a href="#" className="nav-link">Experiences</a>
        </div>
        <div className="navbar-right">
          <a href="#" className="nav-link home">Airbnb your home</a>
          <a href="#" className="nav-link">
            <img src="img2.png" alt="language" width="24" height="24" />
          </a>
          <div className="dropdown">
            <button className="profile-btn btn btn-outline-secondary dropdown-toggle">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg" alt="menu" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg" alt="profile" />
            </button>
            <div className="dropdown-content">
            <a href="#">Sign up</a>
              <a href="#">Log in</a>
              <hr />
              <a href="#">Gift cards</a>
              <a href="#">Airbnb your home</a>
              <a href="#">Host an experience</a>
              <a href="#">Help Center</a>
            </div>
          </div>
        </div>
      </div>
    </nav>


    </div>
  )
}

export default Navbar