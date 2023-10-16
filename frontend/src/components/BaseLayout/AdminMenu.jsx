import React from 'react'
import { NavLink } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

const AdminMenu = () => {
  return (
    <>
    <div className="container-admin">
        <h4>Admin Panel</h4>
        <ListGroup>
        <ListGroup.Item><NavLink to="/dashboard/admin/create-category">Create Category</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/dashboard/admin/create-product">Create Product</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/dashboard/admin/products">View Products</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/dashboard/admin/orders">View Orders</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/dashboard/admin/users">Users</NavLink></ListGroup.Item>
        </ListGroup>
    </div>
    </>
  )
}



export default AdminMenu