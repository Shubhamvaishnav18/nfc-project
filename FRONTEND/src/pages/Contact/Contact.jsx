import React, { useState } from 'react';
import './Contact.css';
import { assets } from "../../assets/assets"
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const response = await axios.post('https://nfc-project-backend.onrender.com/api/contact/contact', formData); 

    if (response.data.success) {
      toast.success("Thank you, we'll contact you soon!");
      setFormData({ name: '', email: '', phone: '', message: '' }); 
    }
    else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact</h2>
        <p>Do fill in the form, or give us a call.</p>
        <div className="contact-info">
          <div className="location">
            <p>HeloTap India Pvt. Ltd., Delhi, India 234567</p>
            <p>Maxx <br />helotap@gamil.com <br /> +91-9234753892</p>
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
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
