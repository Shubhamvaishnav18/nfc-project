import "./Cookie.css"

const CookiePolicy = () => {
  return (
    <div className="cookie-policy-container">
      <div className="cookie-header">
        <div className="cookie-icon">🍪</div>
        <h1>Cookie Policy</h1>
        <p>
          This Cookie Policy explains how Helotap ("we", "us", or "our") uses cookies and similar technologies to
          recognize you when you visit our website. It explains what these technologies are, why we use them, and your
          rights to control our use of them.
        </p>
      </div>

      <div className="cookie-content">
        <div className="cookie-section">
          <div className="section-icon">🔍</div>
          <h2>What are Cookies?</h2>
          <p>
            Cookies are small data files that are placed on your device when you visit a website. They are widely used
            by website owners to make their websites work more efficiently, as well as to provide reporting information.
          </p>
        </div>

        <div className="cookie-section">
          <div className="section-icon">❓</div>
          <h2>Why We Use Cookies?</h2>
          <p>
            We use cookies for several reasons. Some cookies are required for technical reasons in order for our website
            to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies help us to
            improve the performance and functionality of our website, as well as to understand user behavior for
            analytics and marketing purposes.
          </p>
        </div>

        <div className="cookie-section">
          <div className="section-icon">📊</div>
          <h2>Types of Cookies We Use</h2>
          <p>We may use the following types of cookies on our website:</p>
          <div class="cookie-types">
            <div class="cookie-type">
              <div class="cookie-type-icon">🔒</div>
              <div class="cookie-type-content">
                <strong>Essential Cookies:</strong> Necessary for website operation.
              </div>
            </div>
            <div class="cookie-type">
              <div class="cookie-type-icon">⚡</div>
              <div class="cookie-type-content">
                <strong>Performance Cookies:</strong> Used to enhance the performance and functionality.
              </div>
            </div>
            <div class="cookie-type">
              <div class="cookie-type-icon">📈</div>
              <div class="cookie-type-content">
                <strong>Analytics Cookies:</strong> Help us understand user behavior on our website.
              </div>
            </div>
            <div class="cookie-type">
              <div class="cookie-type-icon">🎯</div>
              <div class="cookie-type-content">
                <strong>Marketing Cookies:</strong> Used to display relevant advertisements and track conversions.
              </div>
            </div>
          </div>
        </div>

        <div className="cookie-section">
          <div className="section-icon">⚙️</div>
          <h2>Your Choices Regarding Cookies</h2>
          <p>
            You can control the use of cookies at the browser level. If you choose to reject cookies, you may still use
            our website, but your access to some functionality and areas of our website may be restricted.
          </p>
        </div>

        <div className="cookie-section">
          <div className="section-icon">🔄</div>
          <h2>Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices. Any changes will be
            posted on this page. We encourage you to review this Cookie Policy periodically.
          </p>
        </div>
      </div>

      <div className="cookie-contact">
        <h2>Questions About Our Cookie Policy?</h2>
        <p>If you have any questions about our Cookie Policy, please contact us.</p>
        <a href="mailto:cookiepolicy@helotap.com" className="contact-btn">
          cookiepolicy@helotap.com
        </a>
      </div>
    </div>
  )
}

export default CookiePolicy
