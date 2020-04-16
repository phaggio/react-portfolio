import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <Link className="navbar-brand" to="/portfolio">
        Portfolio
      </Link>
      <Link className="navbar-brand" to="/contact">
        Contact
      </Link>
    </nav>
  )
}

export default Navbar;
