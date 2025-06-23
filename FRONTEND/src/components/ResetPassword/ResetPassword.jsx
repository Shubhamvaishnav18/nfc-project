import React, { useState, useContext } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import "./ResetPassword.css";

const ResetPassword = ({ setShowLogin }) => {
  const { token } = useParams();
  const { url } = useContext(StoreContext);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/user/reset-password/${token}`, { password });
      alert(response.data.message);
      navigate("/");
      if (response.data.success) {
        setShowLogin(true);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleReset} className="reset-password-form">
      <h2>Reset Your Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPassword;
