// src/components/chat/MessageList.jsx

import React from 'react';
import Message from "./Message";

export default function MessageList({messages}) {
    return (
        <div className="message-list">
            {messages.map((message, index)=> (
                <Message key={index} message={message}/>
            ))}
        </div>
    );
}