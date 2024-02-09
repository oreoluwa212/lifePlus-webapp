import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/web-App/DashboardPage';
import SignUpMainPage from './pages/SignUpMainPage';
import AppointmentsPage from './pages/web-App/AppointmentsPage';
import DonationHistoryPage from './pages/web-App/DonationHistoryPage';
import LearningCenterPage from './pages/web-App/LearningCenterPage';
import CommunityForumPage from './pages/web-App/CommunityForumPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/signup-donor" element={<SignUpMainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/donations" element={<DonationHistoryPage />} />
        <Route path="/community" element={<CommunityForumPage />} />
        <Route path="/learning" element={<LearningCenterPage />} />
      </Routes>
    </>
  )
}

export default App;
