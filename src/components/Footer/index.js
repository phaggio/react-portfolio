import React from 'react';


const Footer = () => {

  // const themeContext = useContext(ThemeContext);

  return (
    <nav className="navbar fixed-bottom navbar-dark bg-dark justify-content-between">
      <small className="text-light">react portfolio by phaggio</small>

      <div className="d-flex">
        <a className="nav-item nav-link p-0 ml-2" href={"https://github.com/phaggio/"}
          rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github-square fa-2x"></i>
        </a>

        <a className="nav-item nav-link p-0 ml-2" href={"https://www.linkedin.com/in/richard-c-wang/"}
          rel="noopener noreferrer" target="_blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>


    </nav>
  )
}

export default Footer;
