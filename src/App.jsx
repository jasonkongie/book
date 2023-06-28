import React, { useState, useEffect } from 'react';
import LoadingPage from './components/LoadingPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const redirectURL = 'https://docs.google.com/forms/d/e/1FAIpQLSf3I4zoZQCArKw60wk9ynrixiN1ZtvzDsEsZxcsSDcgBznvsQ/viewform'; 

  return (
    <div className="app" style={{ position: 'absolute', top: '0', bottom: '0', left: '0', right: '0', background: 'black' }}>
      {isLoading ? (
        <div className="gallery-loading">
          <LoadingPage
            strings={["you're invited"]}
            typeSpeed={120}
            backSpeed={100}
            loop={true}
          />
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <a 
            href={redirectURL} 
            style={{
              display: 'inline-block',
              padding: '20px 40px', 
              background: '#888', 
              color: 'black', 
              fontSize: '24px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              textDecoration: 'none', 
              borderRadius: '50px',
              transition: 'all 0.3s ease', // Animate the transition
              boxShadow: '0 0 5px rgba(0,0,0,0.3)', // Add some shadow
            }}
            onMouseEnter={(e) => { // Change the color when mouse enters
              e.target.style.background = 'red';
            }}
            onMouseLeave={(e) => { // Reset the color when mouse leaves
              e.target.style.background = '#888';
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';
            }}
            onMouseDown={(e) => { // Simulate the old button click effect
              e.target.style.transform = 'scale(0.9)';
              e.target.style.boxShadow = '0 0 1px rgba(0,0,0,0.1)';
            }}
            onMouseUp={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';
            }}
          >
            party
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
