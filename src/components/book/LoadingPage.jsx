import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";
import './LoadingPage.css';

const LoadingPage = ({ strings = ['Loading...'], typeSpeed = 50, backSpeed = 10, loop = true }) => {
  const el = useRef(null);

  useEffect(() => {
    const typedOptions = {
      strings,
      typeSpeed,
      backSpeed,
      loop,
    };

    const typed = new Typed(el.current, typedOptions);

    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop, el]);

  return (
    <div className="loading-page">
        <span ref={el}></span>
    </div>
  );
};

export default LoadingPage;