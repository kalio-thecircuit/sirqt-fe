import React from 'react';

export default function ChatSection() {
  return (
    <div className="chat-section">
      <div className="chat-header">
        <h2>Shopping Assistant</h2>
      </div>
      
      <div className="chat-messages">
        {/* Messages will go here */}
        <div className="message-placeholder">Messages will appear here</div>
      </div>
      
      <div className="chat-input">
        <input type="text" placeholder="Type your message..." />
        <button>Send</button>
      </div>
    </div>
  );
}