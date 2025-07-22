import React, { useState, useContext } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    let endpoint = currState === "Login"
      ? "/api/user/login"
      : currState === "Sign Up"
      ? "/api/user/register"
      : "";

    if (!endpoint) return;

    const response = await axios.post(url + endpoint, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
    setLoading(false);
  };

  const onForgotPassword = async (event) => {
    event.preventDefault();
     setLoading(true);
    const response = await axios.post(`${url}/api/user/forgot-password`, {
      email: data.email
    });
    alert(response.data.message);
    if (response.data.success) setCurrState("Login");
    setLoading(false);
  };

  return (
    <div className="login-popup">
      <form onSubmit={currState !== "Forgot" ? onLogin : onForgotPassword} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" required />
          )}
          {(currState === "Login" || currState === "Sign Up" || currState === "Forgot") && (
            <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Your email" required />
          )}
          {currState !== "Forgot" && (
            <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder="Your password" required />
          )}
        </div>

        {currState === "Forgot" ? (
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        ) : (
          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : currState === "Sign Up" ? "Create account" : "Login"}
          </button>
        )}

        {currState !== "Forgot" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}

        {currState === "Login" && (
          <p className="forgot-password">
            <span onClick={() => setCurrState("Forgot")}>Forgot Password?</span>
          </p>
        )}

        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : currState === "Sign Up" ? (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        ) : (
          <p>Go back? <span onClick={() => setCurrState("Login")}>Login</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
