import React from 'react'
import Layout from '../../components/BaseLayout/Layout'
import AdminMenu from '../../components/BaseLayout/AdminMenu'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {

  const [auth] = useAuth()
  return (

    <Layout>
        <h1>AdminDashboard</h1>
        <AdminMenu/>
        <div >
          <h3>Name: {auth?.user?.name}</h3>
          <h3>Email: {auth?.user?.email}</h3>
          <h3>Contact no: {auth?.user?.phone}</h3>
        </div>
    </Layout>
  )
}

export default AdminDashboard