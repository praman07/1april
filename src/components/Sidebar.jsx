import Navbar from "./Navbar";

import { NavLink } from "react-router-dom"; 
import { LayoutDashboard, Bitcoin } from "lucide-react"; 


const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-400 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <div className="w-64 bg-[#111827] text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-8">AdminKit</h1>
      <nav className="space-y-2">
        <NavLink to="/dashboard" className={linkClass}>
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>
        <NavLink to="/crypto" className={linkClass}>
          <Bitcoin size={18} /> Crypto
        </NavLink>
      </nav>
    </div>
  );
};
export default Sidebar;