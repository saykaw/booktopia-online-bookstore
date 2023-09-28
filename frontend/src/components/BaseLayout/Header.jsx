import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {BiBookReader} from 'react-icons/bi';



const Header = () => {
  return (
    <>
    <div className="navbar">
      <ul>
        <li className="navbar-elements"><Link to='/'><BiBookReader/>Booktopia</Link></li>
        <li className="navbar-elements"><NavLink to='/'>Home</NavLink></li>
        <li className="navbar-elements"><NavLink to='/category'>Category</NavLink></li>
        <li className="navbar-elements"><NavLink to='/register'>Register</NavLink></li>
        <li className="navbar-elements"><NavLink to='/login'>Login</NavLink></li>
        <li className="navbar-elements"><NavLink to='/cart'>Cart(0)</NavLink></li>
      </ul>
    </div>
    </>
  )
}

export default Header