import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";

const MainLayout = () => {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="flex-1 min-h-screen">
        <Navbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;