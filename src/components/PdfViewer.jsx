import React from "react";
import SectionContainer from "./SectionContainer";

const PdfViewer = (props) => {
  const content = (
    <div className="pdfViewer" style={{ height: "100%" }}>
      <iframe
        src="./assets/myCV.pdf"
        title="CV"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );

  return <SectionContainer {...props} content={content} />;
};

export default PdfViewer;
