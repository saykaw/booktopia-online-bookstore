import React from 'react'
import Layout from '../components/BaseLayout/Layout'
import "./About.css";

const About = () => {
  return (
    <Layout title={'About us - Booktopia'}> 
        <h1>About</h1>
        <section className='about'>
          <div id='about_image'>
            <img src="https://images.unsplash.com/photo-1494809610410-160faaed4de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwYm9va3N0b3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
          </div>
          <div id='about_content'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni officiis incidunt repudiandae quasi praesentium explicabo cum, tempore vitae repellat dicta. Deleniti eius itaque nam fuga cumque fugiat saepe distinctio voluptates, perferendis, incidunt iure culpa dolore dolorum doloremque tenetur velit. Culpa voluptatibus quasi dolores ex! Facilis iusto dignissimos error quibusdam voluptates vero quaerat amet esse numquam optio! Esse suscipit pariatur eveniet accusamus ad, a voluptatem ea quisquam minima accusantium? Dicta vero perferendis voluptatem ipsam sint voluptas adipisci porro voluptatibus odit error tempore atque alias possimus laborum, aliquam ea consectetur at, libero, molestiae natus culpa? Rerum eius alias omnis illo pariatur.</p>
          </div>
        </section>
    </Layout>
  )
}

export default About