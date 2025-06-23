import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"
import ScrollToTop from './components/ScrollToTop';  
import Navbar from "./components/Navbar/Navbar.jsx";
import Slidebar from "./components/Slidebar/Slidebar.jsx";
import HomePage from "./pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx";
import DesignCard from "./pages/DesignCard/DesignCard.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Privacy from "./pages/Privacy/Privacy.jsx";
import TermsofService from "./pages/TermsOfService/Terms.jsx";
import CookiePolicy from "./pages/CookiePolicy/Cookie.jsx";
import HelpCenter from "./pages/HelpCenter/HelpCenter.jsx";
import Faq from "./pages/Faq/Faq.jsx";
import NfcCard from "./pages/NfcCard/NfcCard.jsx";
import Cart from "./pages/Cart/Cart"
import Product from "./pages/Product/Product.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import ResetPassword from "./components/ResetPassword/ResetPassword.jsx";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess.jsx";

function App() {

  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div>
    <ScrollToTop /> 
      <Slidebar />
      <Navbar setShowLogin = {setShowLogin} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/designcard" element={<DesignCard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:cardName" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/TermsofService" element={<TermsofService />} />
        <Route path="/CookiePolicy" element={<CookiePolicy />} />
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/NfcCard" element={<NfcCard />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<PlaceOrder/>}/>
        <Route path="/reset-password/:token" element={<ResetPassword setShowLogin={setShowLogin} />} />
        <Route path="/order-success" element={<OrderSuccess/>}/>
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
