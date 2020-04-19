import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm  sticky-top navbar-dark bg-dark" role="navigation">
      <a className="navbar-brand" href="/react-portfolio">Richard Wang</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav ml-auto" role="navigation">
          <a className="nav-item nav-link" href="/react-portfolio">Home</a>
          <a className="nav-item nav-link" href="/react-portfolio/portfolio">Portfolio</a>
          <a className="nav-item nav-link" href="/react-portfolio/resume">Resume</a>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;
