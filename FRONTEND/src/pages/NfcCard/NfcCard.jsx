import React, { useState, useContext } from 'react';
import './NfcCard.css';
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';

const NfcCard = () => {
  const [cardSide, setCardSide] = useState('front');
  const [cardColor, setCardColor] = useState('#000');
  const [borderColor, setBorderColor] = useState('#000');
  const [nfcColor, setNfcColor] = useState('#fff');
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [details, setDetails] = useState('');
  const [logo, setLogo] = useState(null);

  const { addItemToCart, setCartItems } = useContext(StoreContext);

  const handleImageUpload = (e) => {
    setLogo(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async () => {
  try {
    const cardDetails = {
      _id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title,
      subTitle,
      details,
      cardColor,
      borderColor,
      nfcColor,
      logo,
      name: "NFC Business Card - NFC Digital Card",
      price: 599,
      quantity: 1, 
      createdAt: new Date().toISOString()
    };

    await addItemToCart(cardDetails);
    toast.success("Card added to cart page successfully!");
  } catch (error) {
    console.error("Error submitting card:", error);
    alert(error.message || 'Failed to save card details');
  }
};
  

  return (
    <div className="nfc-card-container">
      <div className="nfc-card-editor">
        <div className="nfc-card-preview" style={{ backgroundColor: cardColor }}>
          <div className="card-content">
            {cardSide === 'front' && (
              <>
                <img src={logo || '/home_page.png'} alt="" className="card-logo" />
                <div className="title-sub-det">
                <h2 style={{ color: nfcColor }}>{title || 'Your Name'}</h2>
                <h4 style={{ color: nfcColor }}>{subTitle || ''}</h4>
                <p style={{ color: nfcColor }}>{details || ''}</p>
                </div>
                <img src={assets.nfc_symbol1} alt="" className='nfc-symbol'/>
                <div
                  className="qr-code-container"
                  style={{
                    borderColor: borderColor,
                  }}
                >
                  <img
                    src={assets.qr1}
                    alt="QR Code"
                    className="qr-code-image"
                  />
                </div>
              </>
            )}
            {cardSide === 'back' && (
              <div className="back-side">
                HeloTap<span className="superscript">.in</span>
              </div>
            )}
          </div>
        </div>

        <div className="nfc-card-controls">
          <div className="toggle-side">
            <button
              onClick={() => setCardSide('front')}
              className={cardSide === 'front' ? 'active' : ''}
            >
              Front Side
            </button>
            <button
              onClick={() => setCardSide('back')}
              className={cardSide === 'back' ? 'active' : ''}
            >
              Back Side
            </button>
          </div>

          <label>Choose a card color</label>
          <div className="color-options">
            {['#000', '#9e9e9e', '#ffeb3b', '#2196f3', '#e91e63', '#f44336'].map((color) => (
              <div
                key={color}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => setCardColor(color)}
              ></div>
            ))}
          </div>

          <label>Choose a QR border color</label>
          <div className="color-options">
            {['#000', '#fff', '#9e9e9e', '#00bcd4', '#4caf50', '#ff5722'].map((color) => (
              <div
                key={color}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => setBorderColor(color)}
              ></div>
            ))}
          </div>

          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Your Name"
            required
          />
          <label>Sub Title</label>
          <input
            type="text"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            placeholder="e.g. Phone Number, Job Title or Company"
          />
          <label>More Details</label>
          <input
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Additional Details"
          />

          <div className="upload-logo-container">
            <label htmlFor="upload-logo" className="upload-logo-label">
              Logo/Image
            </label>
            <input
              id="upload-logo"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="upload-logo-input"
            />
          </div>

          <button onClick={handleSubmit} className="submit-details-btn1">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default NfcCard;
