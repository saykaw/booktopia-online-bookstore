import React from 'react'
import Layout from '../components/BaseLayout/Layout'
import {useAuth} from '../context/auth'

const Homepage = () => {
  const[auth,setAuth] = useAuth();
  return (
    <Layout title={'Booktopia - Find a book that matches you'}> 
        <h1>Homepage</h1>
        <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  )
}

export default Homepage