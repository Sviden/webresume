import React from "react";
import SectionContainer from "./SectionContainer";
import { experienceInfo } from "../utils/cvDataExtractor";

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

      {experienceInfo.map((exp, index) => (
        <div key={index} className="experience">
          <div className="experienceName">
            <span>
              {exp.title} | {exp.company}
            </span>
            {exp.link && (
              <div className="link">
                {" "}
                🔗
                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                  {exp.link}
                </a>
              </div>
            )}
          </div>
          <div className="experienceDescription">
            <span>🗓️ {exp.period}</span>
            <br />
            <span style={{ whiteSpace: "pre-line" }}>{exp.description}</span>
          </div>
        </div>
      ))}
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
