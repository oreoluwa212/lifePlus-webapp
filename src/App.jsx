import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </>
  )
}

export default App;
