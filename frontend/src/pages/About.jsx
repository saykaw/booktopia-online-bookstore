import React from 'react'
import Layout from '../components/BaseLayout/Layout'
import './About.css'

const About = () => {
  return (
    <Layout title={'About Us - Booktopia'}> 
    <div className='main-div'>
      <p className='text-center'>Home &gt; About</p>
      <h2 className='text-center'>About Us</h2>
      <p>Welcome to Booktopia, your premier online destination for all things books and literature!</p>
      <p>At Booktopia, we are passionate about connecting readers with their next great read. Whether you're an avid bookworm, a casual reader, or someone exploring the world of literature for the first time, we have something for everyone.</p>
      <p>Our extensive collection spans genres, authors, and formats, ensuring that you can find the perfect book to suit your taste. From bestselling novels to hidden gems, we curate our selection to offer a diverse and enriching reading experience.</p>

      <p>Why choose Booktopia?</p>
      <ul>
        <li>Wide Selection: Explore a vast array of books across genres and themes.</li>
        <li>Quality Service: Our team is dedicated to providing excellent customer service and ensuring a seamless shopping experience.</li>
        <li>Book Recommendations: Discover personalized recommendations to help you find your next favorite book.</li>
        <li>Convenience: Shop from the comfort of your home and have your favorite books delivered to your doorstep.</li>
      </ul>

      <p>Thank you for choosing Booktopia as your literary companion. Join us on this reading journey, and let's explore the magical world of books together!</p>
      </div>
    </Layout>
  )
}

export default About