import React, { useState, useEffect } from 'react';
import LoadingPage from './LoadingPage';

const Book = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const googleDrivePdfUrl = `https://drive.google.com/file/d/10pteF4Hf0L8b35e4VEKzDWUjPSy2yfcL/preview`;

  return (
    <div className="pdf" style={{ position: 'absolute', top: '0', bottom: '0', left: '0', right: '0' }}>
      {isLoading ? (
        <div className="gallery-loading">
          <LoadingPage
            strings={["My footprint of consciousness..."]}
            typeSpeed={70}
            backSpeed={70}
            loop={true}
          />
        </div>
      ) : (
        <iframe 
          src={googleDrivePdfUrl}
          style={{ position: 'absolute', top: '0', bottom: '0', left: '0', right: '0', height: '100%', width: '100%', border: '0' }}
          type="application/pdf"
          title="Document"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Book;
