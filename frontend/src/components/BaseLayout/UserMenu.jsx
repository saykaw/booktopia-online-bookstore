import React from 'react'
import { NavLink } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

const UserMenu = () => {
  return (
    <>
    <div className="container-admin">
        <h4>User Dashboard</h4>
        <ListGroup>
        <ListGroup.Item><NavLink to="/dashboard/user/profile">Profile</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/dashboard/user/orders">Orders</NavLink></ListGroup.Item>
        </ListGroup>
    </div>
    </>
  )
}

export default UserMenu