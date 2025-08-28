import React from "react";
import SectionContainer from "./SectionContainer";

export default function Skills({
  onClose,
  defaultPos,
  defaultSize,
  isActive,
  onClick,
  onFullScreen,
  windowId,
  isFullscreen,
}) {
  const skills = (
    <div className="skillsWrapper">
      <h2>Technical Skills</h2>
      <div className="skill">
        <div className="skillName">
          <span>React</span>
        </div>
        <div className="skillLevel">
          <span>Expert</span>
        </div>
      </div>
      <div className="skill">
        <div className="skillName">
          <span>JavaScript</span>
        </div>
        <div className="skillLevel">
          <span>Advanced</span>
        </div>
      </div>
      <div className="skill">
        <div className="skillName">
          <span>CSS/SCSS</span>
        </div>
        <div className="skillLevel">
          <span>Advanced</span>
        </div>
      </div>
    </div>
  );

  return (
    <SectionContainer
      content={skills}
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
