// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import MuseumProject from './components/MuseumProject';
import {Spotify} from './components/spotify/Spotify'
import Book from './components/book/book'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/museum-project" element={<MuseumProject />} />
        <Route path="/spotify" element={<Spotify />} /> 
        <Route path="/book" element={< Book />} /> 
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
