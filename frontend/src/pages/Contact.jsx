import React from 'react'
import Layout from '../components/BaseLayout/Layout'
import './About.css'


const Contact = () => {
  return (
    <Layout title={'Contact us - Booktopia'}> 
    <div className='main-div'>
      <p className='text-center'>Home &gt; Contact Us</p>
      <h2 className='text-center'>How Can We Help You?</h2>
      
      <p>For questions about your online order:</p>
      <p>Email: estore@booktopia.com</p>
      <p>Phone: +91 1234567890</p>

      <p>To inquire about advertising or supply to Booktopia:</p>
      <p>Email: advertising@booktopia.com</p>

      <p>For Corporate Orders and Bulk Gift Vouchers:</p>
      <p>Email: corporateorders@booktopia.com</p>
      <p>Phone: +91 9820485707</p>

      <p>For School Fairs:</p>
      <p>Email: schoolfairs@booktopia.com</p>
      <p>Phone: +91 9822849528</p>

      <p>For general inquiries:</p>
      <p>Email: contactus@booktopia.com</p>

      <p>We are here to assist you! Feel free to reach out, and we'll respond as soon as possible.</p>
    </div>
</Layout>
  )
}

export default Contact