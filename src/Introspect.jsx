import React from 'react';
import './introspect.css'; // Assuming you have CSS in a separate file
import LeftNav from './LeftNav.jsx'
import Header from './header.jsx'
import Quiz from './quix.jsx';
import { Link } from 'react-router-dom';
import image from './asset/image.jpg';

const Introspect = () => {
  return (
    <>
    <Header/>
    <div className='grid'>
    <div><LeftNav/></div>
    <div style={{ margin: '100px', padding: '0 20px' }}>
      <h1>Welcome to the Mental Health Introspect Quiz</h1>
      <div className="content">
        <div className="intro">
          <div>
            <p>
              Taking time to assess your mental health is a positive step toward understanding and caring for yourself. 
              This quiz is designed to help you reflect on your thoughts, feelings, and behaviors over the past few weeks. 
              It's not a diagnosis but a tool to provide insight and encourage self-awareness.
            </p>
            <p><strong>Remember:</strong></p>
            <p>
              - There are no right or wrong answers; honesty is key to making this helpful for you.<br />
              - Your responses are private and meant for your personal reflection.<br />
              - If any questions bring up difficult emotions, consider taking a break or reaching out to someone you trust.
            </p>
            <Link to="/quiz" className='quiz-btn'>Start the Quiz</Link>
          </div>
          <img src={image} alt="Mental health awareness image" />
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Introspect;
