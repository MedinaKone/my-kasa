import React, { useState } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel">
      {images.length > 1 && (
        <>
          <button className="prev" onClick={prevImage}>
            <img src={arrowLeft} alt="Précédent" width="46" height="79" />
          </button>
          <button className="next" onClick={nextImage}>
            <img src={arrowRight} alt="Suivant" width="46" height="79" />
          </button>
        </>
      )}

      <img
        className="logement-img"
        src={images[currentIndex]}
        alt="Logement"
        width={1240}
        height={415}
      />

      {/* Affichage du numéro de l'image */}
      <div className="image-counter">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export default Carrousel;
