import React from 'react'
import Layout from '../../components/BaseLayout/Layout'
import AdminMenu from '../../components/BaseLayout/AdminMenu'

const CreateProduct = () => {
  return (
    <Layout title={'Dashboard - Create Product'}>
      <AdminMenu/>
      <div><h1>CreateProduct</h1></div>
    </Layout>
  )
}

export default CreateProduct