import React from 'react';
import './About.css';
import { assets } from "../../assets/assets"

const About = () => {
  return (
    <div className="about-container-about">
      <section className="about-header">
        <h1>About Us</h1>
        <p>
          HeloTap is an innovative tech startup specializing in smart NFC business cards that are transforming how people share and connect in the digital age.
          With a simple tap on any smartphone, HeloTap cards instantly transfer your contact details, social media profiles, website links, and more—no app required.
          Designed for professionals, creators, and businesses, HeloTap combines cutting-edge NFC technology with sleek, customizable card designs to create a powerful first impression.
          Whether you're networking at events or meeting clients, HeloTap ensures you stand out while eliminating the need for outdated paper cards.
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
          HeloTap was founded by Maxx, with Jhon as co-founder. The company idea was established during the COVID-19 lockdown to address the increasing need for contactless business solutions. The founders, with backgrounds in technology, saw an opportunity to modernize the way professionals network by creating NFC-enabled smart business cards.

          Together, we work towards providing the best solutions and customer experiences.
        </p>
        <img src={assets.team3} alt="" />
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or want to know more about our NFC card solutions? Reach out to us, and we’ll be happy to assist you.
          <br />Email: helotap@gmail.com
          <br />Phone: +91-9234753892
        </p>
      </section>
    </div>
  );
};

export default About;
