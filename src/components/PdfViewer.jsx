import React, { useState, useEffect } from "react";
import SectionContainer from "./SectionContainer";
import DownloadIcon from "@mui/icons-material/Download";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const PdfViewer = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [pdfSupported, setPdfSupported] = useState(true);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent;
      const isMobileDevice =
        width <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          userAgent
        );
      setIsMobile(isMobileDevice);
    };

    // Check PDF support in iframe
    const checkPdfSupport = () => {
      const userAgent = navigator.userAgent;
      // iOS Safari and some mobile browsers don't support PDF in iframe
      const isIOS = /iPad|iPhone|iPod/.test(userAgent);
      const isSafariMobile =
        /Safari/.test(userAgent) && /Mobile/.test(userAgent);
      const isAndroidChrome =
        /Android/.test(userAgent) && /Chrome/.test(userAgent);

      // Most mobile browsers have issues with PDF in iframe
      if (isIOS || (isSafariMobile && !isAndroidChrome)) {
        setPdfSupported(false);
      }
    };

    checkMobile();
    checkPdfSupport();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const pdfUrl = "./assets/myCV.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenInNewTab = () => {
    window.open(pdfUrl, "_blank");
  };

  const content = (
    <div className="pdfViewer" style={{ height: "100%" }}>
      {!isMobile && pdfSupported ? (
        // Desktop and supported browsers - use iframe
        <iframe
          src={pdfUrl}
          title="CV"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      ) : (
        // Mobile and unsupported browsers - show alternative interface
        <div className="pdfViewerMobile">
          <div className="pdfInfo">
            <h2>Curriculum Vitae</h2>
            <p>
              {isMobile
                ? "For the best viewing experience on mobile, please download the PDF or open it in a new tab."
                : "Your browser doesn't support viewing PDFs inline. Please use one of the options below."}
            </p>
          </div>

          <div className="pdfActions">
            <button className="pdfActionBtn download" onClick={handleDownload}>
              <DownloadIcon />
              Download PDF
            </button>
            <button
              className="pdfActionBtn openNew"
              onClick={handleOpenInNewTab}
            >
              <OpenInNewIcon />
              Open in New Tab
            </button>
          </div>

          {/* Fallback: try object tag for some browsers */}
          <div className="pdfFallback">
            <object
              data={pdfUrl}
              type="application/pdf"
              style={{ width: "100%", height: "300px", minHeight: "200px" }}
            >
              <p>
                Unable to display PDF.
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  Click here to view the PDF
                </a>
              </p>
            </object>
          </div>
        </div>
      )}
    </div>
  );

  return <SectionContainer {...props} content={content} />;
};

export default PdfViewer;
