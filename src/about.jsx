import React from 'react';
import './About.css'; 
import logo from './asset/Logo.png';
import about from './asset/about.jpg';
import LeftNav from './LeftNav.jsx'
import Header from './header.jsx'

const About = () => {
  return (
    <>
    <Header/>
    <div className='grid'>
    <div><LeftNav/></div>
    <div className="about-container">
     
      <h1>About Us</h1>
      <section className="para">
        <p>Welcome to <strong>MoodLifter</strong>, a safe and supportive space dedicated to mental well-being.</p>
      </section>

      <div className="container">
        <div className="row">
          <div className="flex">
            <section className="mission">
              <h2>Our Mission</h2>
              <p>At MoodLifter, we strive to empower individuals by providing accessible mental health resources, support, and guidance. We believe in breaking down the stigma surrounding mental health and offering a platform where anyone can seek help, share their thoughts, and find solace.</p>
            </section>

            <section className="values">
              <h2>Our Values</h2>
              <ul>
                <li><strong>Compassion</strong> – We approach each individual with kindness, understanding, and care.</li>
                <li><strong>Accessibility</strong> – Mental health resources should be available to everyone, regardless of location or background.</li>
                <li><strong>Confidentiality</strong> – We prioritize the privacy and comfort of every person who reaches out to us.</li>
                <li><strong>Support</strong> – Through every challenge, we’re here to provide guidance and resources to help you navigate your journey.</li>
              </ul>
            </section>

            <section className="team">
              <h2>Meet Our Team</h2>
              <p>Our dedicated team of mental health professionals and volunteers is here to provide support, resources, and a compassionate listening ear. With years of experience in counseling and mental health advocacy, we’re committed to helping you find balance and peace.</p>
            </section>

            <section className="contact">
              <h2>Get in Touch</h2>
              <p>If you need immediate help, please contact our 24/7 helpline at <strong>1-800-123-4567</strong> or email us at <strong>support@moodlifter.com</strong>.</p>
            </section>
          </div>
          <div className="flex">
            <img src={about} alt="Mental wellbeing is important and we care about your mental health" />
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default About;
