import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Crypto from "../pages/Crypto";
import MainLayout from "../layouts/mainlayout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="crypto" element={<Crypto />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;