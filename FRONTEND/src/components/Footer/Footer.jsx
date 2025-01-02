import React from 'react';
import './Footer.css';
import { NavLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section logo-section">
          <h2>HeloTap</h2>
          <p>Your smart NFC business card for easy sharing and seamless networking.</p>
        </div>

        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/designcard'>Design Your Card</NavLink></li>
            <li><NavLink to="/pvc">Shop</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer-section support-section">
          <h3>Support</h3>
          <ul>
            <li><NavLink to='/faq'>FAQ</NavLink></li>          
            <li><NavLink to='/contact'>Customer Support</NavLink></li>           
            <li><NavLink to="/HelpCenter">Help Center</NavLink></li>
          </ul>
        </div>

        <div className="footer-section legal-section">
          <h3>Legal</h3>
          <ul>
            <li><NavLink to="/Privacy">Privacy</NavLink></li>
            <li><NavLink to="/TermsofService">Terms of Service</NavLink></li>
            <li><NavLink to="/CookiePolicy">Cookie Policy</NavLink></li>
          </ul>
        </div>

        <div className="footer-section social-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><XIcon/></a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a></li>
            <li><a href="https://www.instagram.com/helotap.in?igsh=ZGo0eWd0ZTJ3NzJi" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a></li>
          </ul>
        </div>
      </div>
      <hr />
     
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HeloTap. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
