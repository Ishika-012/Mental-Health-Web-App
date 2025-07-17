import React from 'react';
import './chatbot.css'; // Import the CSS for sliding animation
import ChatBot from './Chatbot';

const Chat = ({ show, toggleChatBot }) => {
  return (
    <div className={`chatbot-container ${show ? 'show' : ''}`}>
      <div className="chatbot-header">
        <h3>ChatBot</h3>
        <button onClick={toggleChatBot} className="close-btn">✕</button>
      </div>
      <div className="chatbot-content">
      
        <ChatBot/>
      </div>
    </div>
  );
};

export default Chat;
