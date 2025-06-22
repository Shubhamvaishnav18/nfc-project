import "./Terms.css"

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <div className="terms-icon">📋</div>
        <h1>Terms of Service</h1>
        <p>
          Welcome to Helotap. By accessing or using our website, you agree to be bound by these Terms of Service. Please
          read them carefully before using our services.
        </p>
      </div>

      <div className="terms-content">
        <div className="terms-section">
          <div className="section-icon">✅</div>
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using our website, you agree to comply with all the terms and conditions listed here. If
            you do not agree with these terms, you should not use our website or services.
          </p>
        </div>

        <div className="terms-section">
          <div className="section-icon">🌐</div>
          <h2>Use of the Website</h2>
          <p>
            You agree to use the website only for lawful purposes. You are prohibited from violating or attempting to
            violate the security of the website, using it for fraudulent purposes, or distributing harmful content such
            as malware.
          </p>
        </div>

        <div className="terms-section">
          <div className="section-icon">👤</div>
          <h2>Account and Purchases</h2>
          <p>
            When you create an account with us or make a purchase, you are responsible for providing accurate
            information. You agree to keep your account details secure and accept responsibility for all activities
            under your account.
          </p>
        </div>

        <div className="terms-section">
          <div className="section-icon">©️</div>
          <h2>Intellectual Property</h2>
          <p>
            All content and materials on our website, including logos, text, images, and product designs, are the
            intellectual property of Helotap. You may not use or distribute any materials without our explicit
            permission.
          </p>
        </div>

        <div className="terms-section">
          <div className="section-icon">⚠️</div>
          <h2>Termination</h2>
          <p>
            We reserve the right to terminate your access to the website if we determine that you have violated these
            terms.
          </p>
        </div>

        <div className="terms-section">
          <div className="section-icon">⚖️</div>
          <h2>Limitation of Liability</h2>
          <p>
            Helotap will not be liable for any damages or losses resulting from the use of our website or services,
            including indirect or consequential losses.
          </p>
        </div>

        <div className="terms-section">
          <div className="section-icon">🔄</div>
          <h2>Changes to the Terms</h2>
          <p>
            We may update these terms periodically. It is your responsibility to review them frequently. By continuing
            to use the website after any changes, you accept the revised terms.
          </p>
        </div>
      </div>

      <div className="terms-contact">
        <h2>Questions About These Terms?</h2>
        <p>If you have any questions about these Terms of Service, please contact us.</p>
        <a href="mailto:support@helotap.com" className="contact-btn">
          support@helotap.com
        </a>
      </div>
    </div>
  )
}

export default TermsOfService
