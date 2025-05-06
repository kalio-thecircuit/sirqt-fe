import React from 'react';

// Props will be added later, e.g., title, type, messageLink
export default function ArtifactItem({ title, details }) {
  return (
    <div className="artifact-item">
      {/* Icon placeholder can be added later */}
      <div className="artifact-item-info">
        <p className="artifact-item-title">{title || 'Artifact Title'}</p>
        <p className="artifact-item-details">{details || 'Artifact details or message link'}</p>
      </div>
    </div>
  );
} 