import React from 'react'
import Layout from '../../components/BaseLayout/Layout'
import AdminMenu from '../../components/BaseLayout/AdminMenu'

const CreateCategory = () => {
  return (
    <Layout title={'Dashboard - Create Category'}>
      <AdminMenu/>
      <div><h1>CreateCategory</h1></div>
    </Layout>
  )
}

export default CreateCategory