import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/web-App/DashboardPage';
import SignUpMainPage from './pages/SignUpMainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/signup-donor" element={<SignUpMainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  )
}

export default App;
