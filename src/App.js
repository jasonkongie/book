import React, { useState, useEffect } from 'react';
import pdfFile from './book.pdf';  
import LoadingPage from './components/LoadingPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('visited_gallery', true);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    } );

  return (
    <div className="pdf">
      {isLoading ? (
        <div className="gallery-loading">
          <LoadingPage
            strings={["Custom text 1.", "Custom text 2."]}
            typeSpeed={50}
            backSpeed={50}
            loop={true}
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
