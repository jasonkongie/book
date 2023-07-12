// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import MuseumProject from './components/MuseumProject';
import {Spotify} from './components/Music/Spotify';
import Book from './components/Journal/book';
import Party from './components/Party/Party'; // import the Party component
import RedirectComponent from './components/Redirect/RedirectComponent'; 

const root = createRoot(document.getElementById('root')); // Create a root

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/museum-project" element={<MuseumProject />} />
        <Route path="/spotify" element={<Spotify />} /> 
        <Route path="/book" element={<Book />} /> 
        <Route path="/party" element={<Party />} />
        <Route path="/instagram" element={<RedirectComponent targetUrl="https://www.instagram.com/jasonkongie/" delay={1000} />} />
        <Route path="/twitter" element={<RedirectComponent targetUrl="https://twitter.com/jasonkongie" delay={1000} />} />
        <Route path="/threads" element={<RedirectComponent targetUrl="https://www.threads.net/@jasonkongie" delay={1000} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
