import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { gsap } from "gsap";
import FolderIcon from "@mui/icons-material/Folder";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import MiniCandyCrush from "./MiniCandyCrush";
import Quiz from "./Quiz";
import Settings from "./footer/Settings";
import { animateWindowClose } from "../animations/animations";
import SendEmail from "./footer/SendEmail";
import PdfViewer from "./PdfViewer";

const Desktop = forwardRef((props, ref) => {
  const folderRefs = useRef({});
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
    height: typeof window !== "undefined" ? window.innerHeight : 768,
  });

  const getWindowPosition = (offset = 0, type = null) => {
    // Full screen games should start at top-left
    if (type === "game" || type === "quiz") {
      return {
        x: 0,
        y: 0,
      };
    }

    const isMobile = windowSize.width <= 768;
    // Match the defaults used in SectionContainer.jsx (desktop: 600x500)
    const windowWidth = isMobile ? Math.min(windowSize.width - 40, 350) : 800;
    const windowHeight = isMobile
      ? Math.min(windowSize.height - 100, 500)
      : 600;

    return {
      x: Math.max(20, windowSize.width / 2 - windowWidth / 2 + offset),
      y: Math.max(20, windowSize.height / 2 - windowHeight / 2 + offset),
    };
  };

  const getWindowSize = (type) => {
    if (type === "game" || type === "quiz") {
      // Full screen for both mobile and desktop
      return {
        width: windowSize.width,
        height: windowSize.height,
      };
    }
    return undefined;
  };
  const [openWindows, setOpenWindows] = useState([
    {
      id: Date.now(),
      type: "about",
      position: getWindowPosition(0, "about"),
      isFullscreen: false,
    },
  ]);

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

  // Function to calculate responsive window position

  const folders = [
    { name: "About", component: "about", icon: "folder" },
    { name: "Skills", component: "skills", icon: "folder" },
    { name: "Experience", component: "experience", icon: "folder" },
    { name: "Mini Crush", component: "game", icon: "game" },
    { name: "Quiz", component: "quiz", icon: "game" },
  ];

  const handleFolderClick = (folderComponent) => {
    const existingWindow = openWindows.find(
      (window) => window.type === folderComponent
    );

    if (existingWindow) {
      // Window is already open, bring it to front by moving it to end of array
      const otherWindows = openWindows.filter(
        (window) => window.type !== folderComponent
      );
      setOpenWindows([...otherWindows, existingWindow]);
    } else {
      // Window is not open, create new one
      const isMobile = windowSize.width <= 768;
      const offset = isMobile
        ? openWindows.length * 15
        : openWindows.length * 30;

      const newWindow = {
        id: Date.now(),
        type: folderComponent,
        position: getWindowPosition(offset, folderComponent),
        size: getWindowSize(folderComponent),
      };
      setOpenWindows([...openWindows, newWindow]);
    }
  };

  // Function to open settings window (can be called from Footer)
  const handleOpenSettings = () => {
    handleFolderClick("settings");
  };

  const handleOpenEmail = () => {
    handleFolderClick("email");
  };

  const handleOpenPdf = () => {
    handleFolderClick("pdf");
  };

  useImperativeHandle(ref, () => ({
    handleOpenSettings,
    handleOpenEmail,
    handleOpenPdf,
  }));

  const handleCloseWindow = (windowId) => {
    // Find the window to get its type for the corresponding folder
    const windowToClose = openWindows.find((window) => window.id === windowId);

    if (!windowToClose) {
      // Fallback: remove immediately if window not found
      setOpenWindows((prevWindows) =>
        prevWindows.filter((window) => window.id !== windowId)
      );
      return;
    }

    // Find the corresponding folder element
    const folderElement = folderRefs.current[windowToClose.type];

    animateWindowClose(
      windowId,
      folderElement,
      windowToClose.isFullscreen,
      () => {
        // Remove window from state after animation completes
        setOpenWindows((prevWindows) =>
          prevWindows.filter((window) => window.id !== windowId)
        );
      }
    );
  };

  const handleFullScreenWindow = (windowId) => {
    setOpenWindows((prevWindows) =>
      prevWindows.map((window) =>
        window.id === windowId
          ? { ...window, isFullscreen: !window.isFullscreen }
          : window
      )
    );
  };

  const renderWindowComponent = (window, index) => {
    const isTopWindow = index === openWindows.length - 1;
    const commonProps = {
      onClose: () => handleCloseWindow(window.id),
      onFullScreen: () => handleFullScreenWindow(window.id),
      defaultPos: window.position,
      defaultSize: window.size,
      isActive: isTopWindow,
      windowId: window.id, // Add windowId prop for data attribute
      onClick: () => {
        // Bring window to front when clicked anywhere on it
        if (!isTopWindow) {
          const otherWindows = openWindows.filter((w) => w.id !== window.id);
          setOpenWindows([...otherWindows, window]);
        }
      },
      isFullscreen: window.isFullscreen,
    };

    switch (window.type) {
      case "about":
        return <About key={window.id} {...commonProps} />;
      case "skills":
        return <Skills key={window.id} {...commonProps} />;
      case "experience":
        return <Experience key={window.id} {...commonProps} />;
      case "game":
        return <MiniCandyCrush key={window.id} {...commonProps} />;
      case "quiz":
        return <Quiz key={window.id} {...commonProps} />;
      case "settings":
        return (
          <Settings
            key={window.id}
            {...commonProps}
            onBackgroundChange={props.onBackgroundChange}
          />
        );
      case "email":
        return <SendEmail key={window.id} {...commonProps} />;
      case "pdf":
        return <PdfViewer key={window.id} {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="desktop">
      {/* Folder icons */}
      <div className="foldersGrid">
        {folders.map((folder, index) => (
          <div
            key={folder.component}
            ref={(el) => (folderRefs.current[folder.component] = el)}
            className="folderIcon"
            onClick={() => handleFolderClick(folder.component)}
            onTouchStart={() => handleFolderClick(folder.component)}
          >
            {folder.icon === "game" ? (
              <div className="gameIcon folderSvg">🎮</div>
            ) : (
              <div className="folderSvg">📁</div>
            )}
            <span className="folderLabel">{folder.name}</span>
          </div>
        ))}
      </div>

      {/* Render open windows */}
      {openWindows.map((window, index) => renderWindowComponent(window, index))}
    </div>
  );
});

export default Desktop;
