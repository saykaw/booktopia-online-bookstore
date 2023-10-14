import { useState } from 'react'
import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/auth/Register';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/routes/Private';
import ForgotPassword from './pages/auth/ForgotPassword';
import AdminRoute from './components/routes/AdminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateCategory from './pages/admin/CreateCategory';
import CreateProduct from './pages/admin/CreateProduct';
import Users from './pages/admin/Users';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import { matchScreen } from 'antd/es/_util/responsiveObserver';
import Products from './pages/admin/Products';
import UpdateProduct from './pages/admin/UpdateProduct';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/dashboard" element ={<PrivateRoute/>}>
        <Route path="user" element={<Dashboard/>}/>
        <Route path="user/orders" element={<Orders/>}/>
        <Route path="user/profile" element={<Profile/>}/>
      </Route>
      <Route path="/dashboard" element ={<AdminRoute/>}>
        <Route path="admin" element={<AdminDashboard/>}/>
        <Route path="admin/create-category" element={<CreateCategory/>}/>
        <Route path="admin/create-product" element={<CreateProduct/>}/>
        <Route path="admin/product/single-product/:slug" element={<UpdateProduct/>}/>
        <Route path="admin/products" element={<Products />}/>
        <Route path="admin/users" element={<Users/>}/>
      </Route>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/aboutus" element={<About/>}/>
      <Route path="/contactus" element={<Contact/>}/>
      <Route path="*" element={<Pagenotfound/>}/>

    </Routes> 
    </>
  )
}

export default App;


