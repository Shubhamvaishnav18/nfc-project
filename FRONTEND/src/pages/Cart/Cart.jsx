import React, { useContext } from "react"
import "./Cart.css"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { assets } from "../../assets/assets";

const Cart = () => {

  const {cartItem, card_list, custom_card_list, removeFromCart, getTotalCartAmount, addToCart} = useContext(StoreContext);

//   const navigate = useNavigate();

  // const renderCustomCardPreview = (item) => {
  //   return (
  //     <div className="nfc-card-preview" style={{ backgroundColor: item.cardColor }}>
  //               <div className="card-content">
  //                 {item.cardSide === 'front' && (
  //                   <>
  //                     <img src={logo || '/home_page.png'} alt="" className="card-logo" />
  //                     <div className="title-sub-det">
  //                     <h2 style={{ color: nfcColor }}>{title || 'Your Name'}</h2>
  //                     <h4 style={{ color: nfcColor }}>{subTitle || ''}</h4>
  //                     <p style={{ color: nfcColor }}>{details || ''}</p>
  //                     </div>
  //                     <img src={assets.nfc_symbol1} alt="" className='nfc-symbol'/>
  //                     <div
  //                       className="qr-code-container"
  //                       style={{
  //                         borderColor: borderColor,
  //                       }}
  //                     >
  //                       <img
  //                         src={assets.qr1}
  //                         alt="QR Code"
  //                         className="qr-code-image"
  //                       />
  //                     </div>
  //                   </>
  //                 )}
  //                 {item.cardSide === 'back' && (
  //                   <div className="back-side">
  //                     HeloTap<span className="superscript">.in</span>
  //                   </div>
  //                 )}
  //               </div>
  //             </div>
  //   );
  // };

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

{/* {custom_card_list.map((item) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  
                  {renderCustomCardPreview(item)}
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
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
        })} */}

        {/* Render custom cards */}
        {Object.keys(cartItem).map((key) => {
  const item = cartItem[key];

  if (item._id) {
    // Render custom card if available
    return (
      <div key={key}>
        <div className="cart-items-title cart-items-item">
          <div className="nfc-card-preview" style={{ backgroundColor: item.cardColor }}>
            <div className="card-content">
              <img src={item.logo || '/home_page.png'} alt="" className="card-logo" />
              <div className="title-sub-det">
                <h2 style={{ color: item.nfcColor }}>{item.title || 'Your Name'}</h2>
                <h4 style={{ color: item.nfcColor }}>{item.subTitle || ''}</h4>
                <p style={{ color: item.nfcColor }}>{item.details || ''}</p>
              </div>
              <img src={assets.nfc_symbol1} alt="" className='nfc-symbol'/>
              <div className="qr-code-container" style={{ borderColor: item.borderColor }}>
                <img src={assets.qr1} alt="QR Code" className="qr-code-image" />
              </div>
            </div>
          </div>
          <p>{item.name}</p>
          <p>₹{item.price}</p>
          <div className="quantity-controls">
            <button onClick={() => removeFromCart(key)}>-</button>
            <p>{cartItem[key]}</p>
            <button onClick={() => addToCart(key)}>+</button>
          </div>
          <p>₹{item.price * cartItem[key]}</p>
          <p onClick={() => removeFromCart(key)} className="cross">x</p>
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
          <button>PROCEED TO CHECKOUT</button>   
        </div>
      </div>
    </div>
  )
}

export default Cart






// onClick={()=>navigate("/order")}