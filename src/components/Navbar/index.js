import React from 'react';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <a className="navbar-brand" href="/portfolio">
        Portfolio
      </a>
      <a className="navbar-brand" href="/contact">
        Contact
      </a>
    </nav>
  )
}

export default Navbar;
