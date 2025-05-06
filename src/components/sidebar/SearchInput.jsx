import React from 'react';

export default function SearchInput() {
  return (
    <div className="search-input-container">
      <input type="text" placeholder="Search artifacts..." className="search-input-field" />
      <button className="search-button">
        {/* Placeholder for a search icon, e.g., from lucide-react */}
        <span>&#x1F50D;</span> {/* Magnifying glass emoji */}
      </button>
    </div>
  );
} 