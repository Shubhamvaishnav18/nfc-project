import React, { useContext } from 'react';
import './DesignCard.css';
import ClientSlider from '../../components/ClientSlider/ClientSlider';
import { assets } from "../../assets/assets"
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext"

const DesignCard = () => {

  const navigate = useNavigate();
  const {cartItem, custom_card, removeFromCart, getTotalCartAmount, addToCart} = useContext(StoreContext);

    return (
        <>
        <div className="design-your-card">
      
      <div className="card-image-section">
        <img 
          src={assets.helocard} 
          alt="NFC Card" 
          className="design-card-image" 
        />
      </div>

      <div className="card-info-section">
        <h2>NFC Business Card - NFC Digital Card</h2>
        <p>
          Customize your NFC card the way you want it. Choose from a variety of 
          designs and make it truly yours.
        </p>
        <ul className="features-list">
          <li>✅ One-Time Payment, No Monthly Fees</li>
          <li>✅ Compatible with iOS & Android - No App Needed</li>
          <li>✅ One Card, One Profile, Unlimited Sharing</li>
        </ul>
        <button className="design-button" onClick={()=>navigate("/NfcCard")}>Design your card</button>
      </div>
    </div>
    <section className="clients-section">
        <h2>Our Clients</h2>
        <ClientSlider />
    </section>
    <div className="how-it-works-container">
      <h2 className="how-it-works-heading">How it Works</h2>
      <div className="how-it-works-content">
       
        <div className="how-it-works-item">
          <img 
            src="https://th.bing.com/th/id/OIP.7exPCaK7KWGHgFOWmsRt3QHaHa?rs=1&pid=ImgDetMain" 
            alt="Smart NFC Card" 
            className="how-it-works-image"
          />
          <h3>Smart NFC Card</h3>
          <p>
            Design your NFC card with our design tool or send us your details, 
            so we will design your card using your logo and industry. 
            We will send a preview for your approval before printing.
          </p>
        </div>

        <div className="how-it-works-item">
          <img 
            src="https://optivice.com/wp-content/uploads/2023/05/hands_1-02-1024x725.png" 
            alt="Your Online Profile" 
            className="how-it-works-image"
          />
          <h3>Your Online Profile</h3>
          <p>
            Our platform generates a free online profile/website associated with 
            your NFC card. You can alter and update the content at any time by 
            utilizing your HeloTap dashboard.
          </p>
        </div>

        <div className="how-it-works-item">
          <img 
            src={assets.home_page} 
            alt="Tap, Share & Save" 
            className="how-it-works-image"
          />
          <h3>Tap, Share & Save</h3>
          <p>
            Share business profile and contact info easily by tapping the card on 
            devices. No app needed, saves time, and makes connections quickly.
          </p>
        </div>
      </div>
    </div>
    </>
    )
};

export default DesignCard;