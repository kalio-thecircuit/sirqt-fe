// src/components/chat/Message.jsx

import React from 'react';

export default function Message({message}) {
    const {sender, text} = message;

    //Determine style based on sender
    const isUser =  sender === 'user';

    return (
        <div className= {`message-container ${isUser ? 'user-message' : 'ai-message'}`}>
            <div className={`message ${isUser ? 'user' : "ai"}`}>
                {text}
            </div>
        </div>
    )
}