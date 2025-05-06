// src/components/ChatSection.jsx

import React from 'react';
import ChatHeader from './chat/ChatHeader';
import MessageList from './chat/MessageList';
import ChatInput from './chat/ChatInput';

export default function ChatSection() {

    // Static data from messages
    const messages = [
        { sender: 'ai', text: 'Hello! I\'m your shopping assistant. How can I help you today?' },
        { sender: 'user', text: 'I need to buy ingredients for pasta tonight' },
        { 
            sender: 'ai', 
            text: 'Great! I can help with that. Would you like me to suggest ingredients for a specific pasta dish, or do you have a recipe in mind already?'
        }
  ];
  return (
    <div className="chat-section">
        <ChatHeader />
        <div className = "chat-messages">
            <MessageList messages={messages} />
        </div>
        <ChatInput />
    </div>
  );
}