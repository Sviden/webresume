import React from "react";
import SectionContainer from "./SectionContainer";
import { skillsInfo } from "../utils/cvDataExtractor";

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
  const renderSkillCategory = (title, skills) => (
    <>
      <h3>{title}</h3>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skillName">
            <span>{skill.name}</span>
          </div>
          <div className="skillLevel">
            <span>{skill.level}</span>
          </div>
        </div>
      ))}
    </>
  );

  const skills = (
    <div className="skillsWrapper">
      <h2>Technical Skills</h2>

      {renderSkillCategory("Frontend Technologies", skillsInfo.frontend)}
      {renderSkillCategory("Libraries & Frameworks", skillsInfo.libraries)}
      {renderSkillCategory("Tools & Development", skillsInfo.tools)}
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
