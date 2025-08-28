import React from "react";
import SectionContainer from "./SectionContainer";

const MiniCandyCrush = ({
  onClose,
  defaultPos,
  defaultSize,
  isActive,
  onClick,
  onFullScreen,
  windowId,
  isFullscreen,
}) => {
  const content = (
    <div className="gameIframeWrapper">
      <iframe
        src="/spinwingame/index.html"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Mini Candy Crush Game"
        sandbox="allow-scripts allow-same-origin allow-modals"
      />
    </div>
  );

  return (
    <SectionContainer
      content={content}
      onClose={onClose}
      defaultPos={defaultPos}
      defaultSize={defaultSize}
      isActive={isActive}
      onClick={onClick}
      onFullScreen={onFullScreen}
      windowId={windowId}
      isFullscreen={isFullscreen}
    />
  );
};

export default MiniCandyCrush;
