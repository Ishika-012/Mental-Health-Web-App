import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    // Function to handle sending the message to Flask
    const handleSend = async () => {
        if (!input.trim()) return;  // Prevent sending empty messages

        // Add user message to the chat history
        setMessages([...messages, { sender: 'user', text: input }]);

        try {
            // Send the user's message to Flask
            const response = await axios.post('http://127.0.0.1:5000/get_response', {
                message: input
            });

            // Add the bot's response to the chat history
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'bot', text: response.data.response }
            ]);
        } catch (error) {
            console.error("Error communicating with the chatbot:", error);
            setMessages(prevMessages => [
                ...prevMessages,
                { sender: 'bot', text: "Error: Could not reach server." }
            ]);
        }

        // Clear the input field
        setInput('');
    };

    // Function to handle pressing the Enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Chatbot</h2>
            <div style={{ border: '1px solid #ddd', padding: '10px', minHeight: '300px', overflowY: 'auto' }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '5px 0' }}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                style={{ width: '80%', padding: '10px' }}
                onKeyDown={handleKeyPress} // Use the fixed handleKeyPress function
            />
            <button onClick={handleSend} style={{ padding: '10px', marginLeft: '5px' }}>Send</button>
        </div>
    );
};

export default ChatBot;
