import React from 'react'
import { NavLink,Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <div className="footer">
      <p>All rights reserved</p>
      <Link to = '/aboutus'>About</Link> | <Link to = '/contactus'>Contact Us</Link> 
    </div>
    </>
  )
}

export default Footer