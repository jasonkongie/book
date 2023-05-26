import React, { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Replace 'YOUR_FILE_ID' with your Google Drive's PDF file id
  const googleDrivePdfUrl = `https://drive.google.com/file/d/10pteF4Hf0L8b35e4VEKzDWUjPSy2yfcL/preview`;

  return (
    <div className="pdf" style={{ position: 'absolute', top: '0', bottom: '0', left: '0', right: '0' }}>
      {isLoading ? (
        <div className="gallery-loading">
          <LoadingPage
            strings={["My footprint of consciousness..."]}
            typeSpeed={10}
            backSpeed={50}
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

export default App;
