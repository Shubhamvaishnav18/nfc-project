import {React} from 'react';
import './Home.css';
import ClientSlider from '../../components/ClientSlider/ClientSlider';
import WhyHeloTap from '../../components/WhyHeloTap/WhyHeloTap';
import { useNavigate} from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="homepage">
      <section className="hero-section">
      
        <div className="hero-content">
          <h1>Welcome to HeloTap</h1>
          <p>Tap your way into the future with NFC business cards. Instant sharing, infinite possibilities.</p>
          <button className="get-started-btn" onClick={()=>navigate("/DesignCard")}>Design your card</button>
        </div>
        <div className="hero-image">
          <img src="" alt="" />
        </div>
      </section>

      <section className="clients-section">
        <h2>Our Clients</h2>
        <ClientSlider />
        <WhyHeloTap />
      </section>
    </div>
    </>
  );
};

export default HomePage;
