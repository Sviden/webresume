import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import CloseIcon from "@mui/icons-material/Close";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import "../styles/sectionContainer.scss";

const SectionContainer = ({
  content,
  defaultPos,
  defaultSize,
  onClose,
  onFullScreen,
  isActive,
  onClick,
  windowId,
  isFullscreen,
}) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowSize.width <= 768;
  const defaultWidth =
    defaultSize?.width ||
    (isMobile ? Math.min(windowSize.width - 40, 350) : 800);
  const defaultHeight =
    defaultSize?.height ||
    (isMobile ? Math.min(windowSize.height - 100, 400) : 500);
  const minWidth = isMobile ? 280 : 300;
  const minHeight = isMobile ? 180 : 200;

  const handleCloseClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClose) {
      onClose();
    }
  };

  const handleFullScreenClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onFullScreen) {
      onFullScreen(windowId);
      console.log(isFullscreen);
    }
  };

  return (
    <Rnd
      default={{
        x:
          defaultPos?.x ||
          Math.max(20, windowSize.width / 2 - defaultWidth / 2),
        y:
          defaultPos?.y ||
          Math.max(20, windowSize.height / 2 - defaultHeight / 2),
        width: defaultWidth,
        height: defaultHeight,
      }}
      bounds="parent"
      dragHandleClassName="actionBar"
      cancel=".actionBtn" // allow buttons to be clickable (no drag) especially on mobile
      className={`window ${isActive ? "active" : "inactive"} ${
        isFullscreen ? "fullscreen" : ""
      }`}
      minWidth={minWidth}
      minHeight={minHeight}
      maxWidth={windowSize.width - 20}
      maxHeight={windowSize.height - 20}
      enableResizing={!isMobile}
      disableDragging={false}
      data-window-id={windowId}
    >
      <div className="sectionContainer" onClick={onClick}>
        <div className="actionBar">
          <div className="actionBtnsWrapper">
            <div
              className="actionBtn minimize"
              onClick={handleCloseClick}
              onTouchEnd={handleCloseClick}
            >
              <MinimizeIcon />
            </div>
            <div
              className="actionBtn fullScreen"
              onClick={handleFullScreenClick}
              onTouchEnd={handleFullScreenClick}
            >
              {isFullscreen ? <FilterNoneOutlinedIcon /> : <CropSquareIcon />}
            </div>
            <div
              className="actionBtn close"
              onClick={handleCloseClick}
              onTouchEnd={handleCloseClick}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
        <div className="content">{content}</div>
      </div>
    </Rnd>
  );
};

export default SectionContainer;
