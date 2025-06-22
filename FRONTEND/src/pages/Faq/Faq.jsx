import React, { useState } from 'react';
import './Faq.css';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is NFC technology?',
      answer: 'Near-field communication refers to a set of wireless communication protocols that allows two smartphones to communicate within a few centimeters of each other.',
    },
    {
      question: 'What is the HeloTap Business Card and how does it work?',
      answer: 'HeloTap Business Card is a smart NFC-enabled card that allows you to share information wirelessly by tapping it on NFC-enabled devices.',
    },
    {
      question: 'Is the HeloTap business card compatible with non-nfc smartphones?',
      answer: 'No, the HeloTap business card is only compatible with NFC-enabled smartphones.',
    },
    {
      question: 'Is it compatible with Android or iOS phones?',
      answer: 'Yes, the HeloTap business card works with both Android and iOS phones that have NFC functionality.',
    },
    {
      question: 'Where can I tap the HeloTap Card on an iPhone?',
      answer: 'You can tap the HeloTap Card on the top back of an iPhone to trigger the NFC read.',
    },
    {
      question: 'What are the benefits of the smart business card and HeloTap Digital card?',
      answer: 'The HeloTap Business Card allows quick sharing of contact details, social media links, and more via NFC. The digital card offers easy access and shareability.',
    },
    {
      question: 'Is it possible to put my company\'s logo, image, or design on the HeloTap business card?',
      answer: 'Yes, you can customize the HeloTap business card with your company\'s logo and design.',
    },
    {
      question: 'What details can be shared by the HeloTap business card?',
      answer: 'The HeloTap business card can share your contact information, social media profiles, website links, and more.',
    },
    {
      question: 'Here I can see that NFC feature is available or not in my smartphone?',
      answer: 'You can check the NFC availability in your smartphone\'s settings under "Connections" or "Network settings."',
    },
    {
      question: 'What is a HeloTap digital card, and what are its features and benefits?',
      answer: 'The HeloTap digital card is an electronic version of your business card that can be shared easily via a link or QR code. It offers similar benefits to the NFC card but without the physical medium.',
    },
    {
      question: 'Can I change my contact information, product images, or details at any time?',
      answer: 'Yes, you can update your details any time through the HeloTap platform.',
    },
    {
      question: 'Why should I buy a HeloTap Smart Business Card?',
      answer: 'The HeloTap Smart Business Card provides a modern and eco-friendly way to share your professional details without the need for paper business cards.',
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        <div className="faq-icon">❓</div>
        <h1>Frequently Asked Questions</h1>
        <p>Check most frequently asked questions here, if you still need help please contact us at <a href="mailto:support@helotap.com">support@helotap.com</a>.</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-toggle">{activeIndex === index ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">
              <div className="faq-answer-content">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-contact">
        <h3>Still have questions?</h3>
        <p>Our support team is here to help you with any additional questions.</p>
        <a href="mailto:support@helotap.com" className="contact-btn">Contact Support</a>
      </div>
    </div>
  );
}

export default Faq;
