import React, { useState, useEffect } from 'react';
import pdfFile from './book.pdf';  
import LoadingPage from './components/LoadingPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem('visited_gallery');

    if (!visited) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('visited_gallery', true);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="pdf">
      {isLoading ? (
        <div className="gallery-loading">
          <LoadingPage
            strings={["Custom text 1.", "Custom text 2."]}
            typeSpeed={100}
            backSpeed={50}
            loop={false}
          />
        </div>
      ) : (

        React.createElement(
          "div",
          {},
          React.createElement("iframe", {
            src: pdfFile,
            style: { width: '100%', height: '800px' },
            frameborder: "0",
          })
        )

      )}
    </div>
  );
};

export default App;
