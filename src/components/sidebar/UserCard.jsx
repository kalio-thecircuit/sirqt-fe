import React from 'react';
// import { UserCircle } from 'lucide-react'; // Example for later

export default function UserCard() {
  return (
    <div className="user-card">
      <div className="user-icon-placeholder">
        {/* <UserCircle size={32} /> */}
        <span>&#x1F464;</span> {/* Placeholder icon (bust in silhouette) */}
      </div>
      <div className="user-info">
        <p className="user-name">Guest User</p>
        <p className="user-status">Free Account</p>
      </div>
    </div>
  );
} 