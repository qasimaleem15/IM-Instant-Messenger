// ScreenShareButton.jsx
import React, { useState } from 'react';

const ScreenShareButton = ({ onStartSharing }) => {
  const [isSharing, setIsSharing] = useState(false);

  const toggleSharing = async () => {
    try {
      if (!isSharing) {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        onStartSharing(stream);
      } else {
        // Stop sharing screen
        onStartSharing(null);
      }
      setIsSharing(prev => !prev);
    } catch (error) {
      console.error('Error sharing screen:', error);
    }
  };

  return (
    <button onClick={toggleSharing}>{isSharing ? 'Stop Sharing' : 'Share Screen'}</button>
  );
};

export default ScreenShareButton;
