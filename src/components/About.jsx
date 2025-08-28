import React from "react";
import SectionContainer from "./SectionContainer";

const About = ({
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
    <div className="aboutContent">
      <h1>About</h1>
      <p>
        Welcome to my web resume! This section contains information about my
        background, interests, and professional journey.
      </p>
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

export default About;
