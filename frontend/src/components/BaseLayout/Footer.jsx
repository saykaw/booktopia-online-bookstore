import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
  return (
    <>
    <div className="footer">
      <p className="text-center"> &copy; 2023 Booktopia. All rights reserved.</p>
      <p className="text-center mt-3">
        <Link to = '/aboutus'>About</Link> | <Link to = '/contactus'>Contact Us</Link> 
      </p>
    </div>
    </>
  )
}

export default Footer