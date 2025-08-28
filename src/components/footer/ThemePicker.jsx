import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Default = dark if nothing in localStorage
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Apply theme whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="themePicker">
      <h2 className="settingsTitle">Theme</h2>
      <button
        disabled={theme === "light"}
        className="themeButton"
        onClick={() => setTheme("light")}
      >
        🌞 Light Mode
      </button>
      <button
        disabled={theme === "dark"}
        className="themeButton"
        onClick={() => setTheme("dark")}
      >
        🌚 Dark Mode
      </button>
    </div>
  );
}
