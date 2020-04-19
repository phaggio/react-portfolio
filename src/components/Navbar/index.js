import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (

    <nav className="navbar navbar-expand-sm  sticky-top navbar-dark bg-dark" role="navigation">
      <Link className="navbar-brand" to="/">Richard Wang</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div id="main-navbar" class="navbar-nav ml-auto" role="navigation">
          <Link className="nav-item nav-link" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/portfolio">Portfolio</Link>
          <Link className="nav-item nav-link" to="/contact">Contact</Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;
