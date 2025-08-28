import { gsap } from "gsap";

/**
 * Animates a window closing with a shrinking effect toward its corresponding folder
 * @param {string} windowId - The ID of the window to animate
 * @param {HTMLElement} folderElement - The folder element to animate toward
 * @param {Function} onComplete - Callback function to execute when animation completes
 */
export const animateWindowClose = (
  windowId,
  folderElement,
  isFullscreen,
  onComplete
) => {
  // Get the window element
  const windowElement = document.querySelector(
    `[data-window-id="${windowId}"]`
  );

  if (!windowElement) {
    // Fallback: execute callback immediately if element not found
    if (onComplete) onComplete();
    return;
  }

  if (!folderElement) {
    // Fallback: shrink to center if no folder element provided
    gsap.to(windowElement, {
      scale: 0,
      opacity: 0,
      transformOrigin: "center center",
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });
    return;
  }

  // Get folder and window positions
  const folderRect = folderElement.getBoundingClientRect();
  const windowRect = windowElement.getBoundingClientRect();

  // Calculate the animation target position (center of folder)
  const targetX = folderRect.left + folderRect.width / 2 - windowRect.width / 2;
  const targetY =
    folderRect.top + folderRect.height / 2 - windowRect.height / 2;

  // Animate the window to the folder position while shrinking
  gsap.to(windowElement, {
    x: targetX - windowRect.left,
    y: targetY - windowRect.top,
    scale: 0.1,
    opacity: 0,
    duration: 0.6,
    ease: "power2.inOut",
    onComplete: () => {
      if (onComplete) onComplete();
    },
  });
};

/**
 * Sets up settings icon rotation animation on hover
 * @param {HTMLElement} iconElement - The settings icon DOM element
 * @returns {Function} Cleanup function to remove event listeners
 */
export const setupSettingsIconAnimation = (iconElement) => {
  if (!iconElement) return () => {};

  const handleMouseEnter = () => {
    gsap.to(iconElement, {
      rotation: 180,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(iconElement, {
      rotation: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  // Add event listeners
  iconElement.addEventListener("mouseenter", handleMouseEnter);
  iconElement.addEventListener("mouseleave", handleMouseLeave);

  // Return cleanup function
  return () => {
    iconElement.removeEventListener("mouseenter", handleMouseEnter);
    iconElement.removeEventListener("mouseleave", handleMouseLeave);
  };
};

/**
 * Animates a small panel/menu opening from the taskbar (Start menu)
 * @param {HTMLElement} containerEl - Root element (e.g., .startContentOpen)
 * @returns {gsap.core.Timeline|undefined}
 */
export const startContentOpen = (containerEl) => {
  if (!containerEl) return undefined;

  const tl = gsap.timeline();

  tl.fromTo(
    containerEl,
    {
      opacity: 0,
      y: 30, // starts lower
      scale: 0.95,
      transformOrigin: "left bottom", // same as Windows menu
      filter: "blur(3px)", // subtle blur like Windows pop
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power4.out", // snappy easing
    }
  );

  return tl;
};

/**
 * Animates a small panel/menu opening from the taskbar (Start menu)
 * @param {HTMLElement} containerEl - Root element (e.g., .startContentOpen)
 * @returns {gsap.core.Timeline|undefined}
 */
export const startContentClose = (containerEl) => {
  if (!containerEl) return undefined;

  const tl = gsap.timeline();

  tl.fromTo(
    containerEl,
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    {
      opacity: 0,
      y: 30,
      scale: 0.95,
      transformOrigin: "left bottom",
      filter: "blur(3px)",
      duration: 0.5,
      ease: "power3.inOut",
    }
  );

  return tl;
};
