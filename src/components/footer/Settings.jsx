import React from "react";
import BackgroundPicker from "./BackgroundPicker";
import SectionContainer from "../SectionContainer";
import "../../styles/footer.scss";
import ThemePicker from "./ThemePicker";

export default function Settings(props) {
  const content = (
    <div className="settingsContent">
      <ThemePicker />
      <BackgroundPicker onBackgroundChange={props.onBackgroundChange} />
    </div>
  );

  return <SectionContainer {...props} content={content} />;
}
