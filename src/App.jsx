import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingPage from './components/LoadingPage/LoadingPage';


const App = () => {

  return (
    <div className="app">
      <LoadingPage
        strings={["Welcome to my website. "]}
        typeSpeed={70}
        backSpeed={70}
        loop={true}
      />
    </div>
  );
};

export default App;
