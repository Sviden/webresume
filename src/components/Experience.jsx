import React from "react";
import SectionContainer from "./SectionContainer";

export default function Experience({
  onClose,
  defaultPos,
  defaultSize,
  isActive,
  onClick,
  onFullScreen,
  windowId,
  isFullscreen,
}) {
  const experience = (
    <div className="experienceWrapper">
      <h2>Professional Experience</h2>
      <div className="experience">
        <div className="experienceName">
          <span>Software Developer</span>
        </div>
        <div className="experienceDescription">
          <span>
            Developing modern web applications using React, JavaScript, and
            various frontend technologies. Experience in creating responsive
            user interfaces and implementing complex business logic.
          </span>
        </div>
      </div>
      <div className="experience">
        <div className="experienceName">
          <span>Frontend Developer</span>
        </div>
        <div className="experienceDescription">
          <span>
            Specialized in creating beautiful and functional user interfaces
            with attention to detail and user experience.
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <SectionContainer
      content={experience}
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
}
