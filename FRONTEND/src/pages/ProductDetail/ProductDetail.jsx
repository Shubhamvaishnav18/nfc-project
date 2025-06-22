import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { card_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios';
import "./ProductDetail.css";

const ProductDetail = ({ token }) => {
  const { cardName } = useParams();
  const { addToCart } = useContext(StoreContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    designation: "",
    company: "",
    email: "",
    logo: null
  });

  const card = card_list.find(
    (product) => product.name.toLowerCase().replace(/ /g, "-") === cardName
  );

  if (!card) {
    return <h2>Product not found</h2>;
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      logo: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    // Add the product to cart
    addToCart(card._id);
    
    // Get token from localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Authentication token missing. Please login again.');
    }

    // Prepare form data to send to backend
    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.name);
    formDataToSend.append('phoneNumber', formData.phone);
    formDataToSend.append('designation', formData.designation);
    formDataToSend.append('company', formData.company);
    formDataToSend.append('email', formData.email);
    if (formData.logo) {
      formDataToSend.append('logo', formData.logo);
    }

    // Send data to backend
    const response = await axios.post(
      'http://localhost:4000/api/user/updateUserDetails', 
      formDataToSend, 
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'token': token
        }
      }
    );

    console.log('Details updated successfully:', response.data);
    navigate("/cart");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert(error.response?.data?.message || error.message || 'Failed to update details');
  }
};

  return (
    <div className="product-detail">
      <img src={card.image} alt={card.name} />

      <div className="right-box">
        <h1>{card.name}</h1>
        <p className="price">₹{card.price}</p>

        <form onSubmit={handleSubmit}>
          <h3>Please enter the details.</h3>
          
          <label htmlFor="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleInputChange}
            required 
          />

          <label htmlFor="phone">Phone Number</label>
          <input 
            type="text" 
            id="phone" 
            placeholder="9874839283" 
            value={formData.phone}
            onChange={handleInputChange}
            required 
          />

          <label htmlFor="designation">Your Designation</label>
          <input 
            type="text" 
            id="designation" 
            placeholder="Your Designation" 
            value={formData.designation}
            onChange={handleInputChange}
            required 
          />

          <label htmlFor="company">Your Company</label>
          <input 
            type="text" 
            id="company" 
            placeholder="HeloTap" 
            value={formData.company}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Your Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="helo@tap.in" 
            value={formData.email}
            onChange={handleInputChange}
            required 
          />

          <label htmlFor="logo">LOGO/IMAGE</label>
          <input 
            type="file" 
            id="logo" 
            name="logo" 
            onChange={handleFileChange}
            accept="image/*"
          />

          <button type="submit">Submit Details</button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;