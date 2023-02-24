import React from 'react';
import './nav.css';

import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
export const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg ">
<div className="container-fluid">
<Link className="navbar-brand" to='/'>Alan Shop</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavDropdown">
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to=''>Inicio</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to=''></Link>
    </li>

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Menu
      </a>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to='/category/muebles'>Muebles</Link></li>
        <li><Link className="dropdown-item" to='/category/sillones'>Sillones</Link></li>
        <li><Link className="dropdown-item" to='/'>About</Link></li>
      </ul>
    </li>
  </ul>
</div>

      <Link className="nav-link" to='/cartwidget'><CartWidget /> </Link>
    
</div>
</nav>
    </>
    );
};

export default Navbar;