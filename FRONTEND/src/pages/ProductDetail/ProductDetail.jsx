import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { card_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { cardName } = useParams(); // Get cardName from URL
  const { addToCart } = useContext(StoreContext); 
  const navigate = useNavigate(); 

  const card = card_list.find(
    (product) => product.name.toLowerCase().replace(/ /g, "-") === cardName
  );

  if (!card) {
    return <h2>Product not found</h2>;
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    addToCart(card._id); // Add product to cart
    navigate("/cart"); 
  };

  return (
    <div className="product-detail">
     
      <img src={card.image} alt={card.name} />

      
      <div className="right-box">
        <h1>{card.name}</h1>
        <p className="price">₹{card.price}</p>
        {/* <p>Category: {card.category}</p> */}

       
        <form onSubmit={handleSubmit}>
          <h3>Please enter the details.</h3>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" placeholder="9874839283" required />

          <label htmlFor="designation">Your Designation</label>
          <input type="text" id="designation" placeholder="Your Designation" required />

          <label htmlFor="company">Your Company</label>
          <input type="text" id="company" placeholder="HeloTap" />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="helo@tap.in" required />

          {/* <label htmlFor="logo">Upload Logo/Image</label> */}
          {/* <input type="file" id="logo" /> */}
          <label for="logo">LOGO/IMAGE</label>
          <input type="file" id="logo" />


          <button type="submit">Submit Details</button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
