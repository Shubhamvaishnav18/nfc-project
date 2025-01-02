import React from 'react';
import './HelpCenter.css'; 

const HelpCenter = () => {
  return (
    <div className="help-center-container">
      <h1>Help Center</h1>
      <p>
        Welcome to the Helotap Help Center. We are here to assist you with any inquiries or issues you may encounter while using our products or services. Browse through the frequently asked questions below, or contact our support team for personalized assistance.
      </p>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How do I activate my NFC card?</h3>
          <p>To activate your NFC card, follow the instructions provided in the package or visit our Activation Guide page for a step-by-step tutorial.</p>
        </div>
        <div className="faq-item">
          <h3>What should I do if my NFC card isn't working?</h3>
          <p>If your card isn't functioning properly, please contact our support team at <a href="mailto:support@helotap.com">support@helotap.com</a>. We will troubleshoot the issue and provide a solution.</p>
        </div>
        <div className="faq-item">
          <h3>Can I return or exchange my NFC card?</h3>
          <p>Yes, we offer a 30-day return and exchange policy. Visit our Returns and Exchanges page for more details.</p>
        </div>
      </div>

      <div className="contact-support">
        <h2>Need Further Assistance?</h2>
        <p>
          If you have any other questions or need additional help, feel free to contact our customer support team via email or phone.
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:support@helotap.com">support@helotap.com</a><br />
          <strong>Phone:</strong> +91 8368509527
        </p>
      </div>
    </div>
  );
};

export default HelpCenter;
