import React, { useState } from 'react';
import logo from './asset/Logo.png';
import { Link } from 'react-router-dom';
import Chat from './chat.jsx'; // Import the ChatBot component

const Header = () => {
  const [showChatBot, setShowChatBot] = useState(false);

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  return (
    <>
      <nav>
        <ul className='Nav'>
          <ul className='list'>
            <li id="hamburger">
              <i className="fa-solid fa-bars"></i>
            </li>
            <li>
              <img src={logo} height="45px" width="45px" id='logo' alt="Logo" />
            </li>
          </ul>
          <ul className='list'>
            <Link to='/about'><li className='right'><button>About</button></li></Link>
            <Link to="/login">
              <li className='right'>
                <button>Login</button>
              </li>
            </Link>
            <li className='right'>
              <button onClick={toggleChatBot}>ChatBot</button>
            </li>
          </ul>
        </ul>
      </nav>
      
      {/* Conditionally render the chatbot with sliding animation */}
      <Chat show={showChatBot} toggleChatBot={toggleChatBot} />
    </>
  );
};

export default Header;
