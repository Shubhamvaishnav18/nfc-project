import React from 'react';
import './WhyHeloTap.css'; 
import { FaShareAlt, FaIdBadge, FaInfinity, FaUserCircle } from 'react-icons/fa';

const WhyHeloTap = () => {
  return (
    <section className="why-helotap">
      <div className="container">
        <h2>Why HeloTap digital cards</h2>
        <p>
          Use this text to share information about your store with your customers. 
          Describe products, share announcements, or welcome customers to your store.
        </p>

        <div className="features">
          <div className="feature-item">
            <FaShareAlt className="feature-icon" />
            <h3>Share with anyone</h3>
            <p>Recipients don't need any app to access your profile.</p>
          </div>

          <div className="feature-item">
            <FaIdBadge className="feature-icon" />
            <h3>Match your brand ID</h3>
            <p>Customise your card with your unique logo and colour scheme.</p>
          </div>

          <div className="feature-item">
            <FaInfinity className="feature-icon" />
            <h3>Unlimited cards</h3>
            <p>No matter how big your team grows.</p>
          </div>

          <div className="feature-item">
            <FaUserCircle className="feature-icon" />
            <h3>Use different profiles</h3>
            <p>Create different profile sets under one card and switch between them.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHeloTap;
