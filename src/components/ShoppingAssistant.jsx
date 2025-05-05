import React from 'react';
import ChatSection from './ChatSection';
import ArtifactsSection from './ArtifactsSection';
import BasketSection from './BasketSection';

export default function ShoppingAssistant() {
  return (
    <div className="shopping-assistant">
      <div className="left-panel">
        <ChatSection />
        <ArtifactsSection />
      </div>
      <div className="right-panel">
        <BasketSection />
      </div>
    </div>
  );
}