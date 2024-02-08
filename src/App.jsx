import { useState } from 'react'
import './App.css'
import { DemoPage } from './pages/DemoPage'
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </>
  )
}

export default App;
