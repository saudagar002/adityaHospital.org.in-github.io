// ImageCard.js
import React, { useState } from 'react';
//  import './ImageCard.css';
import "../Style/ImageCard.css";


const ImageCard = ({ name, imageUrl }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={`image-card ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      <img src={imageUrl} alt={name} />
      <h6>{name}</h6>
    </div>
  );
};

export default ImageCard;
