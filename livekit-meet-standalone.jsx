import React from 'react';
import { createRoot } from 'react-dom/client';
import { LiveKitRoom, VideoConference } from '@livekit/components-react';

const LivekitMeet = ({ token, wsUrl }) => {
  return (
    <LiveKitRoom token={token} serverUrl={wsUrl} connect={true} data-lk-theme="default">
      <VideoConference />
    </LiveKitRoom>
  );
};

// Export the global function that will be called from HTML
const livekitStandalone = {
  room: ({ token, wsUrl, elementId = 'livekit-meet' }) => {
    const container = document.getElementById(elementId);
    if (!container) {
      console.error(`No div with id "${elementId}" found`);
      return;
    }
    
    const root = createRoot(container);
    root.render(<LivekitMeet token={token} wsUrl={wsUrl} />);
  }
};

// Expose to window for global access
window.livekitStandalone = livekitStandalone;

export default livekitStandalone;
