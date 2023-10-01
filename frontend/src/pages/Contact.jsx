// Contact.jsx
import React from 'react';
import Layout from '../components/BaseLayout/Layout';
import './Contact.css';
import contactImage from './c1.jpg'


const Contact = () => {
  return (
    <Layout title={'Contact us - Booktopia'}> 
      <div className="contact-container">
        {/* Add the image on the left */}
        <img src={contactImage} alt="Contact Image" className="contact-image" />

        <div className="form-container">
          <h2>Contact Us</h2>
          <div className="form-group">
            <label>Email</label>
            <textarea></textarea>
          </div>
          <div className="form-group">
            <div className="name-fields">
              <div className="first-name">
                <label>First Name</label>
                <textarea></textarea>
              </div>
              <div className="last-name">
                <label>Last Name</label>
                <textarea></textarea>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea></textarea>
          </div>
          <div className="form-group">
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
