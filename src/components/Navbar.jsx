import { Bell, Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white px-6 py-3 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
        <Search size={16} />
        <input
          placeholder="Search..."
          className="bg-transparent outline-none"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
