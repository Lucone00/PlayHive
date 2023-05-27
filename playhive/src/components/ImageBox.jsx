import React, { useState } from "react";
import "../components/imageBox.css";

const ImageBox = () => {
  const [selectedImage, setSelectedImage] = useState(
    "../../public/assets/Goblin_info.webp"
  );
  const characters = [
    "../../public/assets/Goblin_info.webp",
    "../../public/assets/pexels-cottonbro-studio-4842563.jpg",
    "../../public/assets/pexels-erik-mclean-7476603.jpg",
    "../../public/assets/Goblin_info.webp",
    "../../public/assets/Goblin_info.webp",
    "../../public/assets/Goblin_info.webp",
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
