import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/store/userAuth";
import Sidebar from "@/components/widget/Sidebar";
import { Menu } from "lucide-react";

export default function MainLayout() {
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen text-gray-900">
      {/* Desktop Sidebar */}
      

      {/* Mobile Sidebar (Animated) */}

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 transition-all duration-300">
        {/* Top Navbar */}
        <nav className="flex items-center w-full gap-4 mb-6 border-b pb-3 bg-white p-3 rounded-xl shadow-sm">
          {/* Trigger Sidebar (Mobile Only) */}
          <button
            onClick={() => setSidebarOpen(true)}
            className=" p-2 rounded-md hover:bg-gray-100"
          >
            <Menu />
          </button>

          <Link className="font-medium hover:
          text-blue-600" to="/">
            Home
          </Link>
          <Link className="font-medium hover:text-blue-600" to="/about">
            About
          </Link>

          {user ? (
            <button
              onClick={logout}
              className="text-red-500 ml-auto hover:underline"
            >
              Logout
            </button>
          ) : (
            <Link
              className="ml-auto text-blue-600 font-medium hover:underline"
              to="/login"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Routed Page */}
        <Outlet />
      </main>
    </div>
  );
}
