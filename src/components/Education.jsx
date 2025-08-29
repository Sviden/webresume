import React from "react";
import SectionContainer from "./SectionContainer";
import {
  educationInfo,
  certificationsInfo,
  languagesInfo,
} from "../utils/cvDataExtractor";

export default function Education({
  onClose,
  defaultPos,
  defaultSize,
  isActive,
  onClick,
  onFullScreen,
  windowId,
  isFullscreen,
}) {
  const education = (
    <div className="experienceWrapper">
      <h2>Education</h2>

      {educationInfo.map((edu, index) => (
        <div key={index} className="experience">
          <div className="experienceName">
            <span>{edu.degree}</span>
          </div>
          <div className="experienceDescription">
            <span>🗓️ {edu.period}</span>
            {edu.institution && (
              <>
                <br />
                <span style={{ fontWeight: "bold" }}>🎓 {edu.institution}</span>
              </>
            )}
          </div>
        </div>
      ))}

      <h2 style={{ marginTop: "25px" }}>Certifications</h2>

      {certificationsInfo.map((cert, index) => (
        <div key={index} className="experience">
          <div className="experienceName">
            <span>
              {cert.name} | {cert.issuer}
            </span>
          </div>
          <div className="experienceDescription">
            <span>🗓️ {cert.period}</span>
            <br />
            <span>{cert.description}</span>
          </div>
        </div>
      ))}

      <h2 style={{ marginTop: "25px" }}>Languages</h2>

      <div className="skillsWrapper">
        {languagesInfo.map((lang, index) => (
          <div key={index} className="skill">
            <div className="skillName">
              <span>🌐 {lang.language}</span>
            </div>
            <div className="skillLevel">
              <span>{lang.level}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <SectionContainer
      content={education}
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
