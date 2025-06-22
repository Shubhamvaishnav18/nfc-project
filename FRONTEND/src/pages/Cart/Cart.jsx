import React, { useContext } from "react"
import "./Cart.css"
import { StoreContext } from "../../context/StoreContext"
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { assets } from "../../assets/assets";

const Cart = () => {

  const {cartItem, card_list, removeFromCart, getTotalCartAmount, addToCart, cartItems, removeFromCart1, addItemToCart} = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {card_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  {/* <p>{cartItem[item._id]}</p> */}
                  <div className="quantity-controls">
                    <button onClick={() => removeFromCart(item._id)}>-</button>
                    <p>{cartItem[item._id]}</p>
                    <button onClick={() => addToCart(item._id)}>+</button>
                  </div>
                  <p>₹{item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}

        {/* Render the cards added to the cart */}

        {cartItems.map((item) => {
          if (item && item.quantity > 0) { 
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  
                  <div className="nfc-card-preview1" style={{ backgroundColor: item.cardColor }}>
                    <div className="card-content1">
                      <img src={item.logo || '/home_page.png'} alt="logo" className="card-logo1" />
                      <div className="title-sub-det1">
                        <h2 style={{ color: item.nfcColor }}>{item.title || 'Your Name'}</h2>
                        <h4 style={{ color: item.nfcColor }}>{item.subTitle || ''}</h4>
                        <p style={{ color: item.nfcColor }}>{item.details || ''}</p>
                      </div>
                      <img src={assets.nfc_symbol1} alt="NFC Symbol" className="nfc-symbol1" />
                      <div
                        className="qr-code-container1"
                        style={{ borderColor: item.borderColor }}
                      >
                        <img src={assets.qr1} alt="QR Code" className="qr-code-image1" />
                      </div>
                    </div>
                  </div>

                  
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => removeFromCart1(item)}>-</button>
                    <p>{item.quantity}</p> 
                    <button onClick={() => addItemToCart(item)}>+</button>
                  </div>
                  <p>₹{item.price * item.quantity}</p> 
                  <p onClick={() => removeFromCart1(item)} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}


      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:100}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+100}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>   
        </div>
      </div>
    </div>
  )
}

export default Cart
