import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
    {/* <div className="container-admin">
        <h4>User Dashboard</h4>
        <ListGroup>
        <ListGroup.Item><NavLink to="/dashboard/user/profile">Profile</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/dashboard/user/orders">Orders</NavLink></ListGroup.Item>
        </ListGroup>
    </div> */}
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserMenu