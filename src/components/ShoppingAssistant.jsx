import React from 'react';
import ChatSection from './ChatSection';
import ArtifactsBrowser from './ArtifactsBrowser';
import ArtifactViewSection from './ArtifactViewSection';

export default function ShoppingAssistant() {
  // Sample artifact for static display
        
  return (
    <div className="shopping-assistant">
        {/* Left Sidebar - Artifacts Browser */}
      <div className="sidebar-panel">
        <ArtifactsBrowser />
      </div>
      {/* Center Panel - Chat */}
      <div className="center-panel">
        <ChatSection />
      </div>
      {/* Right Panel - Artifact Viewer */}
      <div className="right-panel">
        <ArtifactViewSection />
      </div>
    </div>
  );
}