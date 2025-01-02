import React, { useState } from 'react';
import './Contact.css';
import { assets } from "../../assets/assets"
import axios from 'axios';

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const response = await axios.post('http://localhost:4000/api/contact/contact', formData); // Make sure the URL matches your backend API route

    if (response.data.success) {
      setSuccessMessage("Thank you, we'll contact you soon");
      setFormData({ name: '', email: '', phone: '', message: '' }); 
    }
    else {
      alert(response.data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact</h2>
        <p>Do fill in the form, or give us a call.</p>
        <div className="contact-info">
          <div className="location">
            <p>HeloTap India Pvt. Ltd., Gurugram, Haryana, India 122001</p>
            <p>Vijay Yadav <br />helotap@gamil.com <br /> +91-8368509527</p>
            <img src={assets.Design} alt="" />
          </div>  
        </div>
      </div>

      <div className="contact-form-fields">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"  value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="send-button">SEND</button>
          {successMessage && <p className='masz'>{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
