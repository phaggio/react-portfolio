import React from 'react';

const Footer = () => {

  return (
    <nav className="footer navbar navbar-expand fixed-bottom navbar-dark bg-dark" role="navigation">
      <div className="navbar-nav" role="navigation">
        <a className="nav-item nav-link text-center" href={"https://github.com/phaggio/"}
          rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github-square fa-2x"></i>
        </a>
        <a className="nav-item nav-link text-center" href={"https://www.linkedin.com/in/richard-c-wang/"}
          rel="noopener noreferrer" target="_blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </nav>
  )
}

export default Footer;
