import React, { useState, useEffect } from 'react';
import '../../App.css'; // Import the CSS file
import planeImage from './plane.png'; // Replace this with path to your plane image.

const Party = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSf3I4zoZQCArKw60wk9ynrixiN1ZtvzDsEsZxcsSDcgBznvsQ/viewform';
    }, 3500); // Reduced time for faster movement

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loading">
          <img src={planeImage} alt="Plane" className="plane" />
        </div>
      ) : null}
    </div>
  );
};

export default Party;
