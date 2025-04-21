import './App.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import HomePage from './pages/HomePage';
import BattlePage from './pages/BattlePage';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import { BattleProvider } from './context/BattleContext';


function App() {
  return (
    <BattleProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/battle" element={<BattlePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BattleProvider>

  );
}

export default App;
