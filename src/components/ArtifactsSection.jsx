import React from 'react';

export default function ArtifactsSection() {
  return (
    <div className="artifacts-section">
      
      
      <div className="artifacts-display">
        <div className="artifacts-tabs">
          <button className="tab active">Recipes</button>
          <button className="tab">Pantry</button>
          <button className="tab">Shopping</button>
          <button className="tab">History</button>
        </div>
        
        <div className="artifact-content">
          <div className="artifact-placeholder">Artifact content will appear here</div>
        </div>
      </div>
    </div>
  );
}