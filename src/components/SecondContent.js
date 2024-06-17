import React, { useState } from 'react';
import ImageDescriptionOne from './ImageDescriptionOne'; 
import ImageDescriptionTwo from './ImageDescriptionTwo'; 
import ImageDescriptionThird from './ImageDescriptionThird'; 
import ImageDescriptionFourth from './ImageDescriptionFourth';
import firstImage from '../img/first-image.jpg';
import secondImage from '../img/second-image.jpg';
import thirdImage from '../img/third-image.jpg';
import fourthImage from '../img/fourth-image.jpg'; 
import DescriptionContent from './DescriptionContent';
import '../styles/secondcontent.css'; 

const SecondContent = () => {
  const imageUrls = [
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  return (
      <div className="second-content">
        <div className="second-content-image">
          {imageUrls.map((imageUrl, index) => (
            <div
              key={index}
              className={`image-${selectedImageIndex === index ? 'selected' : ''}`}
              onClick={() => setSelectedImageIndex(index)}
            >
              <img src={imageUrl} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="second-content-image-description">
          {selectedImageIndex !== null ? (
            <>
              {selectedImageIndex === 0 && <ImageDescriptionOne />}
              {selectedImageIndex === 1 && <ImageDescriptionTwo />}
              {selectedImageIndex === 2 && <ImageDescriptionThird />}
              {selectedImageIndex === 3 && <ImageDescriptionFourth />}
            </>
          ) : (
            <DescriptionContent/>
          )}
        </div>
      </div>
  );
};

export default SecondContent;