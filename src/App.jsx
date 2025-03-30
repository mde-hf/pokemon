import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import BattlePage from './pages/BattlePage';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/battle" element={<BattlePage />} />
      <Route path="/about" element={<About />} />
    </Routes>

  );
}

export default App;
