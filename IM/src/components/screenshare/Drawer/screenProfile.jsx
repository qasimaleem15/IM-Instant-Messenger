// ScreenShareButton.jsx
import React, { useState } from "react";
import { ScreenShare } from "@mui/icons-material";

const ScreenShareButton = ({ onStartSharing }) => {
  const [isSharing, setIsSharing] = useState(false);

  const toggleSharing = async () => {
    try {
      if (!isSharing) {
        const stream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });
        onStartSharing(stream);
      } else {
        // Stop sharing screen
        onStartSharing(null);
      }
      setIsSharing((prev) => !prev);
    } catch (error) {
      console.error("Error sharing screen:", error);
    }
  };

  return (
    <div className="btn_screen_share_parant">
      <button className="btn_share_screen" onClick={toggleSharing}>
        {isSharing ? "Stop Sharing" : "Share Screen"} <ScreenShare className="screen_share_btn_icon"/>
      </button>
    </div>
  );
};

export default ScreenShareButton;
