import React from 'react';

// We will create these components in subsequent steps
import SearchInput from './sidebar/SearchInput';
import ArtifactTypeSelector from './sidebar/ArtifactTypeSelector';
import ArtifactItem from './sidebar/ArtifactItem';
import UserCard from './sidebar/UserCard';
// import ArtifactList from './ArtifactList';
// import UserCard from './UserCard';

export default function ArtifactsBrowser() {
  return (
    <div className="artifacts-browser-panel"> {/* Renamed class for clarity */}
      <div className="top-bar">
        <button className="sidebar-toggle-button" aria-label="Toggle sidebar">
          &#x21E4; {/* LEFTWARDS ARROW TO BAR (represents collapse) */}
        </button>
      </div>

      {/* Placeholder for SearchInput */}
      <div className="search-artifacts-section">
        <SearchInput />
      </div>

      {/* Artifact Type Selector */}
      <div className="artifact-type-section">
        <h4>ARTIFACT TYPE</h4>
        <ArtifactTypeSelector />
        <button className="create-button">Create Recipe</button> {/* As per image */}
      </div>

      {/* Relevant Artifacts List */}
      <div className="relevant-artifacts-section">
        <h4>RELEVANT ARTIFACTS</h4>
        <div className="artifact-list-container"> {/* Added a container for potential scrolling */}
          <ArtifactItem 
            title="Pasta Dinner - Suggested..." 
            details="Message 3"
          />
          {/* More items can be added here statically or later dynamically */}
        </div>
      </div>

      {/* User Card */}
      <div className="user-card-section">
        <UserCard />
      </div>
    </div>
  );
}