import React, { useState } from "react";
import "../components/imageBox.css";

const ImageBox = () => {
  const [selectedImage, setSelectedImage] = useState(
    "../../public/assets/Mario-kart.png"
  );
  const characters = [
    "../../public/assets/Lucario.png",
    "../../public/assets/Charizard.png",
    "../../public/assets/Detective-pikachu.png",
    "../../public/assets/Doctor-mario.png",
    "../../public/assets/Link.png",
    "../../public/assets/Mario-kart.png",
    "../../public/assets/Sonic.png",
  ];

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="character-framework">
      <div className="image-box">
        <img
          src={selectedImage}
          alt="Selected character"
          className="selected-character"
        />
        <div className="image-menu">
          {characters.map((image) => (
            <img
              key={image}
              src={image}
              alt="Character menu"
              className="menu-option"
              onClick={() => handleImageSelect(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
