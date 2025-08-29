import React, { useEffect, useRef, useState } from "react";
import Desktop from "./Desktop";
import Footer from "./footer/Footer";
import "../styles/layout.scss";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const desktopRef = useRef();
  const [backgroundImage, setBackgroundImage] = useState("");
  const theme = localStorage.getItem("theme");

  useEffect(() => {
    const savedBg = localStorage.getItem("selectedBackground");
    if (savedBg) {
      setBackgroundImage(savedBg);
    }

    // Handle mobile viewport and virtual keyboard issues
    const handleResize = () => {
      // Update viewport height for mobile browsers
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set initial viewport height
    handleResize();

    // Handle virtual keyboard on mobile
    if ("virtualKeyboard" in navigator) {
      navigator.virtualKeyboard.overlaysContent = true;
    }

    // Update viewport on resize (handles virtual keyboard show/hide)
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  const handleOpenSettings = () => {
    if (desktopRef.current) {
      desktopRef.current.handleOpenSettings();
    }
  };

  const handleOpenEmail = () => {
    if (desktopRef.current) {
      desktopRef.current.handleOpenEmail();
    }
  };

  const handleOpenPdf = () => {
    if (desktopRef.current) {
      desktopRef.current.handleOpenPdf();
    }
  };

  const handleBackgroundChange = (newBg) => {
    setBackgroundImage(newBg);
  };

  return (
    <div
      className="layoutContainer"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : `url(./assets/img1.jpg)`,
      }}
    >
      <Desktop ref={desktopRef} onBackgroundChange={handleBackgroundChange} />
      <Footer
        onOpenSettings={handleOpenSettings}
        handleOpenEmail={handleOpenEmail}
        handleOpenPdf={handleOpenPdf}
      />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        theme={theme === "dark" ? "dark" : "light"}
      />
    </div>
  );
};

export default Layout;
