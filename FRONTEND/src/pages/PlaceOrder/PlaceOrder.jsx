import React, { useContext, useEffect, useState } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, card_list, cartItem, cartItems, cardDetails, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    card_list.map((item) => {
      if (cartItem[item._id] > 0) {
        let itemInfo = {
          ...item,
          quantity: cartItem[item._id],
          isCustomCard: false, 
          cardDetails: cardDetails[item._id] || {} 
        };
        console.log("cardDetails>>>>>>>>>", cardDetails);
        orderItems.push(itemInfo);
      }
    });

    cartItems.forEach((item) => {
      if (item && item.quantity > 0) {
        orderItems.push({
          _id: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          isCustomCard: true, 
          cardDetails: { 
            title: item.title,
            subTitle: item.subTitle,
            details: item.details,
            cardColor: item.cardColor,
            borderColor: item.borderColor,
            nfcColor: item.nfcColor,
            logo: item.logo
          }
        });
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 100, 
      userId: token, 
    };

    try {
      const response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });

      if (response.data.success) {
        const { orderId, razorpayOrderId } = response.data;

        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID, 
          amount: orderData.amount, 
          currency: "INR",
          name: "HeloTap", 
          description: "Order Payment",
          order_id: razorpayOrderId,
          handler: async function (response) {
            const paymentData = {
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              orderId: orderId,
            };

            try {
              const verifyResponse = await axios.post(url + "/api/order/verify", paymentData);
              if (verifyResponse.data.success) {
                toast.success("Payment successful!");

                const receiptRes = await axios.post(`${url}/api/receipts/receipt`, {
                  paymentId: response.razorpay_payment_id,
                  orderId: response.razorpay_order_id,
                  amount: orderData.amount,
                  userEmail: data.email,
                  date: new Date(),
                });

                if (receiptRes.data.success && receiptRes.data.receiptUrl) {
                  navigate("/order-success", {
                    state: {
                      receiptUrl: receiptRes.data.receiptUrl,
                      paymentId: response.razorpay_payment_id,
                      orderId: response.razorpay_order_id,
                      amount: orderData.amount,
                    },
                  });
                }
              } else {
                alert("Payment verification failed");
              }
            } catch (error) {
              console.log("Error verifying payment:", error);
            }
          },
          theme: {
            color: "#F37254", 
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } else {
        toast.error("Error placing the order.");
      }
    } catch (error) {
      console.log("Error placing order:", error);
      toast.error("Error placing the order");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First name" />
          <input required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last name" />
        </div>
        <input required name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Email address" />
        <input required name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" />
        <div className="multi-fields">
          <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
          <input required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input required name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" placeholder="Zip code" />
          <input required name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" />
        </div>
        <input required name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
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
              <p>₹{getTotalCartAmount() === 0 ? 0 : 100}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 100}</b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
