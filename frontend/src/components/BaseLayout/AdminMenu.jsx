import React from 'react'
import { NavLink } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import { useAuth } from '../../context/auth';

const AdminMenu = () => {
    const [auth] = useAuth()
  return (
    <>
    <div className="container-admin">
        <h4>Admin Panel</h4>
        <ListGroup>
        <ListGroup.Item><NavLink to="/dashboard/admin/create-category">Create Category</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/dashboard/admin/create-product">Create Product</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/dashboard/admin/users">Users</NavLink></ListGroup.Item>
        </ListGroup>
    </div>
    <div className="admin-details">
        <h3>Name: {auth?.user?.name}</h3>
        <h3>Email: {auth?.user?.email}</h3>
        <h3>Contact no: {auth?.user?.phone}</h3>
    </div>
    </>
  )
}



export default AdminMenu