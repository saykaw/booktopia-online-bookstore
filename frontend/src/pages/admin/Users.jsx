import React from 'react'
import Layout from '../../components/BaseLayout/Layout'
import AdminMenu from '../../components/BaseLayout/AdminMenu'

const Users = () => {
  return (
    <Layout title={'Dashboard - Users'}>
      <AdminMenu/>
      <div><h1> All Users</h1></div>
    </Layout>
  )
}

export default Users