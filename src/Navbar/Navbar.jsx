//rafce
import React from 'react'

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-dark ">
    <div className="container-fluid text-white">
      <a className="navbar-brand text-white" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
        <ul className="navbar-nav " >
          <li className="nav-item mx-3 ">
            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-ite mx-3">
            <a className="nav-link  text-white" href="#">Experiences</a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link  text-white" href="#">Online Experiences</a>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar