import React, { useState } from 'react';
import OpenAI from 'openai';

const chatbotStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  width: '300px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: 'black',
};

const messageContainerStyle = {
  height: '300px',
  overflowY: 'scroll',
  padding: '10px',
  backgroundColor: '#f0f0f0',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  boxSizing: 'border-box',
  border: '1px solid #ccc',
  borderRadius: '0 0 5px 5px',
};

const sendButtonStyle = {
  padding: '10px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '0 0 5px 0',
  cursor: 'pointer',
};



const Chatbot = () => {
  const [messages, setMessages] = useState([]); // Placeholder for messages
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleInput = (event) => {
    if (event.key === 'Enter') {
      if (input.trim() !== '') {
        setMessages((prevMessages) => [...prevMessages, { user: true, text: input }]);
        setInput('');
       
        
      }
    }
  };

  const sendMessage = async () => {
    try {
      const response = await OpenAI.Completion.create({
        engine: 'text-davinci-003',
        prompt: `You are an AI assistant. User will you give you a task. Your goal is to complete the task as faithfully as you can. While performing the task think step-by-step and justify your steps. While answering think like you are answering to a five year old. Task: ${input}`,
        max_tokens: 100,
      });
      setMessages((prevMessages) => [...prevMessages, { bot: true, text: response.data.choices[0].text }]);
      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  }
  sendMessage();
  return (
    <div style={chatbotStyle}>
      <div style={messageContainerStyle}>
        <button onClick={() => {}} style={sendButtonStyle}>Send</button>
        {/* Messages would go here */}
      </div>
      <input
        style={inputStyle}
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleInput}
      />
    </div>
  );
};
export default Chatbot;