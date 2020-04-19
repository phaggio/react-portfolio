import React from 'react';
import './style.css';

const Footer = () => {

  return (

    <nav className="footer navbar navbar-expand-sm fixed-bottom navbar-dark bg-dark" role="navigation">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div id="main-navbar" class="navbar-nav" role="navigation">
          <a className="nav-item nav-link" href={"//https://github.com/phaggio"} rel="noopener noreferrer" target="_blank">Github</a>
          <a className="nav-item nav-link" href={"//https://www.linkedin.com/in/richard-c-wang/"}>LinkedIn</a>

        </div>
      </div>
    </nav>
  )
}

export default Footer;
