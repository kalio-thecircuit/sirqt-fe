import React from 'react';

export default function ArtifactTypeSelector() {
  // In a real app, activeType would likely be state managed by a parent
  const activeType = 'Recipes'; // Static for now

  return (
    <div className="artifact-type-selector">
      <button 
        className={`artifact-type-button ${activeType === 'Recipes' ? 'active' : ''}`}
      >
        {/* Icon placeholder can be added later */}
        Recipes
      </button>
      <button 
        className={`artifact-type-button ${activeType === 'Pantry Items' ? 'active' : ''}`}
      >
        {/* Icon placeholder can be added later */}
        Pantry Items
      </button>
      <button 
        className={`artifact-type-button ${activeType === 'Shopping Lists' ? 'active' : ''}`}
      >
        {/* Icon placeholder can be added later */}
        Shopping Lists
      </button>
    </div>
  );
} 