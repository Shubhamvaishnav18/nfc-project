import React, {useContext, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext"; 
import menu_icon from "../../assets/menu_icon.png"
import cart_icon from "../../assets/cart_icon.png"

const Navbar = ({ setShowLogin }) => {
  
  const {token,setToken,getTotalCartAmount,getTotalCartQuantity} = useContext(StoreContext);

  const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    const [mobileMenu,setMobileMenu] = useState(false);
    const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <>
    <div className="Navbar">
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
      <div className="logo">
        <NavLink to='/'>HeloTap<span className="superscript">.in</span></NavLink>
      </div>

      {/* Navigation Menu */}
      <ul className="nav-section">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/designcard'>Design your card</NavLink></li>
        <li><NavLink to='/product'>Product</NavLink></li>
        {/* <li className="dropdown">
          <NavLink>Shop</NavLink>
          <div className="dropdown-content">
            <NavLink to="/pvc">PVC Card</NavLink>
            <NavLink to="/metal">Metal Card</NavLink>
          </div>
        </li> */}
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>

      <ul className={mobileMenu?'Mobile-menu':'hide-Mobile-menu'}>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/designcard'>Design your card</NavLink></li>
        <li className="dropdown">
          <NavLink>Shop</NavLink>
          <div className="dropdown-content">
            <NavLink to="/pvc">PVC Card</NavLink>
            <NavLink to="/metal">Metal Card</NavLink>
          </div>
        </li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      

      
       <div className="nav-login-cart">
       {!token?<div className="signup" onClick={() => setShowLogin(true)}>SignIn</div>
      :<div onClick={logout} className="logout">
        Logout
       </div>}
       <NavLink to='/cart'><img src={cart_icon} alt="" /></NavLink>
        <div className="nav-cart-count">{getTotalCartQuantity() > 0 ? getTotalCartQuantity() : "0"}</div>
       </div>
       
    </div>
    </>
  );
};

export default Navbar;