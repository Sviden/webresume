import { useState, useEffect } from "react";
import "../../styles/footer.scss";

const images = [
  "./assets/img1.jpg",
  "./assets/img2.jpg",
  "./assets/img3.jpg",
  "./assets/img4.jpg",
  "./assets/img5.jpg",
  "./assets/img6.jpg",
  "./assets/img7.jpg",
  "./assets/img8.jpg",
  "./assets/img9.jpg",
  "./assets/img10.jpg",
  "./assets/img11.jpg",
  "./assets/img12.jpg",
  "./assets/img13.jpg",
  "./assets/img14.jpg",
];

export default function BackgroundPicker({ onBackgroundChange }) {
  const [selectedBg, setSelectedBg] = useState();

  useEffect(() => {
    const savedBg = localStorage.getItem("selectedBackground");
    if (savedBg) {
      setSelectedBg(savedBg);
    }
  }, []);

  // Save to localStorage whenever background changes
  useEffect(() => {
    selectedBg && localStorage.setItem("selectedBackground", selectedBg);
    selectedBg && onBackgroundChange(selectedBg);
  }, [selectedBg]);

  return (
    <div className="backgroundPicker">
      <h2 className="settingsTitle">Wallpaper</h2>
      <div className="backgroundImagesContainer">
        {images.map((img, index) => (
          <img
            src={img}
            alt={`Background ${index}`}
            onClick={() => setSelectedBg(img)}
            key={index}
            className={`backgroundImage ${
              selectedBg === img ? "selectedBackgroundImage" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
