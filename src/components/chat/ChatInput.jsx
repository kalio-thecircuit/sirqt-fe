// src/components/chat/ChatInput.jsx

import React from 'react';

export default function ChatInput({ onSendMessage}) {
    return (
        <div className="chat-input">
            <input
                type="text"
                placeholder="Type your message ..."
            />
            <button>
                Send
            </button>
        </div>
    );
}