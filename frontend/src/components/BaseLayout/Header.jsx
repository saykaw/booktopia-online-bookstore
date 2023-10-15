import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {BiBookReader} from 'react-icons/bi';
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import './Header.css'
import SearchInput from '../Form/SearchInput';



const Header = () => {
  const [auth,setAuth] = useAuth()
  const handleLogout = () => {
    setAuth({
      ...auth, user:null, token: ''
    })
    localStorage.removeItem('auth');
    toast.success('User logged out successfully.')
  }
  return (
    <>
    <div className="navbar">
      <ul>
        <li className="navbar-elements"><Link to='/'><BiBookReader/>Booktopia</Link></li>
        <li className="navbar-elements"><NavLink to='/'>Home</NavLink></li>
        <li className="navbar-elements"><NavLink to='/category'>Category</NavLink></li>
        <SearchInput></SearchInput>
        {/* <li className="navbar-elements"><NavLink to='/register'>Register</NavLink></li>
        <li className="navbar-elements"><NavLink to='/login'>Login</NavLink></li> */}
        {
          !auth.user ? (<><li className="navbar-elements"><NavLink to='/register'>Register</NavLink></li>
          <li className="navbar-elements"><NavLink to='/login'>Login</NavLink></li></>) 
          : 
          (
          <>
          <div className="dropdown">
          <button className="dropdown-button">{auth?.user?.name}</button>
            <div className="dropdown-content">
                <li><NavLink to={`/dashboard/${auth?.user?.role === 1? "admin" : "user"}`}>Dashboard</NavLink></li>
                <li><NavLink onClick = {handleLogout} to='/login'>Logout</NavLink></li>
            </div>
          </div>
          {/* <li className="navbar-elements"><NavLink onClick = {handleLogout} to='/login'>Logout</NavLink></li> */}
          </>
          )
        }
        <li className="navbar-elements"><NavLink to='/cart'>Cart(0)</NavLink></li>
      </ul>
    </div>
    </>
  )
}

export default Header