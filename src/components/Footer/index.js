import React from 'react';
import footerJSON from '../../json/footer.json';

const json = footerJSON ? footerJSON[0] : {};

const Footer = () => {

  // const themeContext = useContext(ThemeContext);

  return (
    <nav className="navbar fixed-bottom navbar-dark bg-dark justify-content-between">
      <small className="text-light">react portfolio by phaggio | wang.richardc@outlook.com</small>

      <div className="d-flex">

        <a className="nav-item nav-link p-0 ml-2" href={`mailto:${json.email}`}>
          <i className="fas fa-envelope-square fa-2x"></i>
        </a>

        <a className="nav-item nav-link p-0 ml-2" href={json.github}
          rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github-square fa-2x"></i>
        </a>

        <a className="nav-item nav-link p-0 ml-2" href={json.linkedIn}
          rel="noopener noreferrer" target="_blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>

    </nav>
  )
}

export default Footer;
