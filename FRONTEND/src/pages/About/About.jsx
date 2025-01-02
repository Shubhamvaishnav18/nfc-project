import React from 'react';
import './About.css'; 
import { assets } from "../../assets/assets"

const About = () => {
  return (
    <div className="about-container-about">
      <section className="about-header">
        <h1>About Us</h1>
        <p>
        HeloTap, established in 2023, is a product by HeloTap India PVT. LTD. that specializes in NFC-enabled digital business cards. HeloTap is at the forefront of transforming traditional business cards into smart business cards by utilizing Near Field Communication (NFC) technology. The company provides fully customizable NFC business cards that allow users to share contact details, portfolios, social media profiles, and other digital information with just a tap.

HeloTap caters to a wide variety of industries, offering advanced networking solutions that align with the growing demand for contactless and eco-friendly business practices.


        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses and individuals with cutting-edge NFC technology, 
          making data exchange faster, easier, and more secure. We believe in innovation, and our goal 
          is to lead the industry by delivering solutions that simplify everyday interactions.
        </p>
        <img src={assets.home_page} alt="" />
      </section>

      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          We envision a world where contactless, secure data sharing is the norm, and our NFC technology 
          bridges the gap between physical and digital experiences. We are dedicated to creating a future 
          where every interaction is effortless, quick, and secure.
        </p>
      </section> 

      <section className="about-team">
        <h2>Meet the Team</h2>
        <p>
        HeloTap was founded by Vijay Yadav, with Shubham Vaishnav as co-founder. The company idea was established during the COVID-19 lockdown to address the increasing need for contactless business solutions. The founders, with backgrounds in technology, saw an opportunity to modernize the way professionals network by creating NFC-enabled smart business cards.
          
          Together, we work towards providing the best solutions and customer experiences.
        </p>
        <img src={assets.vj} alt="" />
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or want to know more about our NFC card solutions? Reach out to us, and we’ll be happy to assist you.
          <br />Email: helotap@gmail.com
          <br />Phone: +91 8368509527
        </p>
      </section>
    </div>
  );
};

export default About;
