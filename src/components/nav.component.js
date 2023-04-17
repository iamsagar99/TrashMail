import React from 'react'
import logo from '../assets/logo1.png'


function NavBar() {
  return (
    <nav className="navbar bg-body-tertiary nav" >
  <div className="container-fluid">
    <h2 className="navbar-brand" href="/" disabled>
      <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
      Trash Mail
    </h2>
  </div>
</nav>
  )
}

export default NavBar;