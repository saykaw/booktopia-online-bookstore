import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiBookReader } from 'react-icons/bi';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="navbar-elements">
          <Link to='/'>
            <BiBookReader /> Booktopia
          </Link>
        </li>
        <li className="Navbar_Elements">
          <li className="nav-ele"><NavLink to='/'>Home</NavLink></li>
          <li className="nav-ele"><NavLink to='/category'>Category</NavLink></li>
          <li className="nav-ele"><NavLink to='/register'>Register</NavLink></li>
          <li className="nav-ele"><NavLink to='/login'>Login</NavLink></li>
          <li className="nav-ele"><NavLink to='/cart'>Cart(0)</NavLink></li>
        </li>
      </ul>
    </div>
  );
}

export default Header;
