import "./HelpCenter.css"

const HelpCenter = () => {
  return (
    <div className="help-center-container">
      <div className="help-center-header">
        <div className="help-icon">🛠️</div>
        <h1>Help Center</h1>
        <p>
          Welcome to the Helotap Help Center. We are here to assist you with any inquiries or issues you may encounter
          while using our products or services. Browse through the frequently asked questions below, or contact our
          support team for personalized assistance.
        </p>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <div className="faq-item-icon">🔧</div>
            <h3>How do I activate my NFC card?</h3>
            <p>
              To activate your NFC card, follow the instructions provided in the package or visit our Activation Guide
              page for a step-by-step tutorial.
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-item-icon">⚠️</div>
            <h3>What should I do if my NFC card isn't working?</h3>
            <p>
              If your card isn't functioning properly, please contact our support team at{" "}
              <a href="mailto:support@helotap.com">support@helotap.com</a>. We will troubleshoot the issue and provide a
              solution.
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-item-icon">🔄</div>
            <h3>Can I return or exchange my NFC card?</h3>
            <p>
              Yes, we offer a 30-day return and exchange policy. Visit our Returns and Exchanges page for more details.
            </p>
          </div>
        </div>
      </div>

      <div className="contact-support">
        <h2>Need Further Assistance?</h2>
        <p>
          If you have any other questions or need additional help, feel free to contact our customer support team via
          email or phone.
        </p>
        <div className="contact-methods">
          <div className="contact-method">
            <div className="contact-icon">📧</div>
            <div className="contact-info">
              <strong>Email:</strong> <a href="mailto:support@helotap.com">support@helotap.com</a>
            </div>
          </div>
          <div className="contact-method">
            <div className="contact-icon">📞</div>
            <div className="contact-info">
              <strong>Phone:</strong> <a href="tel:+918368509527">+91 8368509527</a>
            </div>
          </div>
        </div>
        <div className="support-hours">
          <span>🕒 Support Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</span>
        </div>
      </div>
    </div>
  )
}

export default HelpCenter
