import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import BattlePage from './pages/BattlePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/battle" element={<BattlePage />} />
    </Routes>

  );
}

export default App;
