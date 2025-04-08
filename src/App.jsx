import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Developers from "./pages/Developers";
import TOS from "./pages/TOS";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <ContentWithLayout />
      </BrowserRouter>
    </div>
  );
};

const ContentWithLayout = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <>
      {!isDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<Main id="847657199156592661" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/docs/terms-of-service" element={<TOS />} />
        <Route path="/docs/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      {!isDashboard && <Footer />}
    </>
  );
};

export default App;
