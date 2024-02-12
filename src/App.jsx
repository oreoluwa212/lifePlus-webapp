import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/web-App/DashboardPage";
import SignUpMainPage from "./pages/SignUpMainPage";
import AppointmentsPage from "./pages/web-App/AppointmentsPage";
import DonationHistoryPage from "./pages/web-App/DonationHistoryPage";
import LearningCenterPage from "./pages/web-App/LearningCenterPage";
import CommunityForumPage from "./pages/web-App/CommunityForumPage";
import PastDonations from "./pages/web-App/PastDonations";
import ForgotPasswordPage from "./pages/web-App/ForgotPasswordPage";
import CreateNewPassword from "./pages/web-App/CreateNewPassword";
import UpdateProfilePage from "./pages/web-App/UpdateProfilePage";
import SignUpProviderPage from "./pages/SignUpProviderPage.jsx";
import LoginProviderPage from "./pages/LoginProviderPage.jsx";
import DonorsManageProfile from "./pages/web-App/DonorsManageProfile.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/signup-donor" element={<SignUpMainPage />} />
        <Route path="/signup-provider" element={<SignUpProviderPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/new-password" element={<CreateNewPassword />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-provider" element={<LoginProviderPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/profile" element={<DonorsManageProfile />} />
        <Route path="/update-profile" element={<UpdateProfilePage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/donations" element={<DonationHistoryPage />} />
        <Route path="/donations/history" element={<PastDonations />} />
        <Route path="/community" element={<CommunityForumPage />} />
        <Route path="/learning" element={<LearningCenterPage />} />
      </Routes>
    </>
  );
}

export default App;
