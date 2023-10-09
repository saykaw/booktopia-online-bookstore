import React from 'react'
import Layout from '../../components/BaseLayout/Layout'
import UserMenu from '../../components/BaseLayout/UserMenu'

const Profile = () => {
  return (
    <Layout title={'Your Profile'}>
        <div className="container-fluid p-3 m-3">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu/>
                </div>
                <div className="col-md-9">
                    <h1> Your Profile</h1>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Profile