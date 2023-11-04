import React from 'react'
import { NavLink } from 'react-router-dom'
// import ListGroup from 'react-bootstrap/ListGroup';

const AdminMenu = () => {
  return (
    <>
    {/* <div className="container-admin">
        <h4>Admin Panel</h4>
        <ListGroup>
        <ListGroup.Item><NavLink to="/dashboard/admin/create-category">Create Category</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/dashboard/admin/create-product">Create Product</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/dashboard/admin/products">View Products</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/dashboard/admin/orders">View Orders</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/dashboard/admin/users">Users</NavLink></ListGroup.Item>
        </ListGroup>
    </div> */}
    <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </>
  )
}



export default AdminMenu