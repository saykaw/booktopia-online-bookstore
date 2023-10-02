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



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/dashboard" element ={<PrivateRoute/>}>
        <Route path="" element={<Dashboard/>}/>
      </Route>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/aboutus" element={<About/>}/>
      <Route path="/contactus" element={<Contact/>}/>
      <Route path="*" element={<Pagenotfound/>}/>

    </Routes> 
    </>
  )
}

export default App;
