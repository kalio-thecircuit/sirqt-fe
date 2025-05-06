// src/components/chat/ChatHeader.jsx

import React from 'react';
// No longer need to import logoSrc as it's in the public folder

export default function ChatHeader() {
    return (
        <div className="chat-header">
            <img src="/Asset 58.png" alt="Sir Q-T Logo" className="chat-header-logo" />
            <h2>Sir Q-T</h2>
        </div>
    );
}