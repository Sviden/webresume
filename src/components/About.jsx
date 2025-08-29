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
      <h1>About Me</h1>
      <div className="aboutTextWithImage">
        <img
          src="./assets/myPic.jpeg"
          alt="Svitlana Denesiuk"
          className="aboutProfilePic"
        />
        <div className="aboutText">
          <p>
            Hi! I'm Svitlana, a passionate Frontend Developer with a strong
            focus on creating beautiful, responsive, and user-friendly web
            applications. With extensive experience in modern web technologies,
            I enjoy transforming creative ideas into functional digital
            experiences.
          </p>
          <p>
            My journey in web development began with a fascination for the
            intersection of design and technology. I specialize in React
            ecosystem development, responsive design, and creating interactive
            user interfaces that provide exceptional user experiences across all
            devices.
          </p>
          <p>
            When I'm not coding, I enjoy staying up-to-date with the latest web
            development trends, contributing to open-source projects, and
            continuously learning new technologies to enhance my skill set. I
            believe in writing clean, maintainable code and following best
            practices in software development.
          </p>
          <p>
            I'm always excited to work on challenging projects that push the
            boundaries of what's possible on the web. Feel free to explore my
            skills and experience, and don't hesitate to reach out if you'd like
            to collaborate!
          </p>
        </div>
      </div>
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
