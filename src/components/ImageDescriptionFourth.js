import React from 'react';
import '../styles/imagedescription.css'
import ImageOne  from '../img/image-one.jpeg'
import ImageTwo from '../img/image-two.jpeg'
import  ImageThree  from '../img/image-three.jpeg'
import  ImageFour  from '../img/image-four.jpeg'

const ImageDescriptionFourth = () => {
    return (
      <div className="images">
        <img src={ImageOne} alt='Imagem um'/>
        <img src={ImageTwo} alt='Imagem dois'/>
        <img src={ImageThree} alt='Imagem três'/>
        <img src={ImageFour} alt='Imagem quatro'/>
      </div>
    );
  };

export default ImageDescriptionFourth;