import './App.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import HomePage from './pages/HomePage';
import BattlePage from './pages/BattlePage';
import About from './pages/About';
import DetailPage from './pages/DetailPage';
import { Route, Routes } from 'react-router-dom';
import { BattleProvider } from './context/BattleContext';
import MainLayout from "./layout/MainLayout";



function App() {
  return (
    <BattleProvider>
      <Routes>
        < Route element={<MainLayout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/battle" element={<BattlePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<DetailPage />} />
        </Route>

      </Routes>
    </BattleProvider >

  );
}

export default App;
