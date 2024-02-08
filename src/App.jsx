import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/log-in" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App;
