import React, { useState, useEffect, useRef } from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import {
  startContentOpen,
  startContentClose,
} from "../../animations/animations";
import "../../styles/start.scss";

export default function Start({ handleOpenEmail, handleOpenPdf }) {
  const [isStartOpen, setIsStartOpen] = useState(false); // visual open state (anim target)
  const [isStartVisible, setIsStartVisible] = useState(false); // mount state
  const startContentRef = useRef(null);
  const startButtonRef = useRef(null);

  useEffect(() => {
    let tl;
    const el = startContentRef.current;
    if (!el) return;
    if (isStartOpen) {
      tl = startContentOpen(el);
    } else if (isStartVisible) {
      tl = startContentClose(el);
      if (tl && typeof tl.eventCallback === "function") {
        tl.eventCallback("onComplete", () => setIsStartVisible(false));
      } else {
        setIsStartVisible(false);
      }
    }
    return () => {
      if (tl) tl.kill();
    };
  }, [isStartOpen, isStartVisible]);

  useEffect(() => {
    const handler = (e) => {
      const contentEl = startContentRef.current;
      const btnEl = startButtonRef.current;
      if (!isStartVisible) return;
      if (contentEl && contentEl.contains(e.target)) return;
      if (btnEl && btnEl.contains(e.target)) return;
      setIsStartOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isStartVisible]);

  const cvPDF = "./assets/myCV.pdf";

  return (
    <div className="startContainer">
      {isStartVisible && (
        <div ref={startContentRef} className="startContentOpen">
          <div className="recommendedSection">
            <div className="recommendedSectionTitle">Recommended</div>
            <div className="recommendedSectionContent">
              <div
                className="pdfItem"
                onClick={() => {
                  setIsStartOpen(false);
                  setIsStartVisible(false);
                  if (handleOpenPdf) handleOpenPdf();
                }}
              >
                <span>📄</span>CV Svitlana Denesiuk
              </div>
              <div
                className="emailItem"
                onClick={() => {
                  setIsStartOpen(false);
                  setIsStartVisible(false);
                  handleOpenEmail();
                }}
              >
                <span>📧</span>Send Me an Email
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={`startBtnWrapper ${
          isStartOpen ? "startBtnWrapperOpen" : ""
        }`}
        ref={startButtonRef}
        onClick={() => {
          if (!isStartVisible) {
            setIsStartVisible(true);
            // next tick open to allow mount, but immediate is fine in React
            setIsStartOpen(true);
          } else if (isStartOpen) {
            setIsStartOpen(false);
          } else {
            setIsStartOpen(true);
          }
        }}
      >
        <div className="startImg">
          <img
            src="./assets/myPic.jpeg"
            alt="photoButton"
            className="photoButton"
          />
        </div>
        <div className="startText">Svitlana Denesiuk</div>
      </div>
    </div>
  );
}
