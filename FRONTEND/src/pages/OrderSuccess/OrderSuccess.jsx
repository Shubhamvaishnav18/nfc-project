import {React,useContext} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderSuccess.css";
import { StoreContext } from "../../context/StoreContext";

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    receiptUrl,
    paymentId,
    orderId,
    amount,
  } = location.state || {};

  const { url } = useContext(StoreContext);

  if (!receiptUrl) {
    return (
      <div className="order-success">
        <h2>Payment Successful ✅</h2>
        <p>No receipt found. Please check your order history or contact support.</p>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="order-success">
      <div className="success-card">
        <h2>🎉 Payment Successful!</h2>
        <p className="thank-you">Thank you for your order!</p>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <p><strong>Payment ID:</strong> {paymentId}</p>
          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Amount Paid:</strong> ₹{amount.toFixed(2)}</p>
        </div>

        <a
          href={`${url}${receiptUrl}`}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="download-receipt-btn"
        >
          📥 Download Receipt
        </a>

        <button className="home-btn" onClick={() => navigate("/")}>
          🏠 Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
