import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/store/userAuth";
import Navbar from "@/components/widget/Navbar";
import { Menu } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/widget/AppSidebar";

export default function MainLayout() {
  const user = useAuth((s) => s.profile);
  const logout = useAuth.getState().logout; // get function reference

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <SidebarProvider open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <div className="flex bg-gray-50 min-h-screen text-gray-900">
        {/* Navbar fixed di atas */}

        {/* Sidebar fixed kiri */}
        <AppSidebar />

        {/* Desktop Sidebar */}

        {/* Mobile Sidebar (Animated) */}

        {/* MAIN CONTENT */}
        <main className="flex flex-col h-screen p-4">
          {/* Top Navbar */}
          <header className="sticky top-4 z-50">
            <Navbar profile={user || { name: "Guest" }} logout={logout} />
          </header>

          {/* Routed Page */}
          <section className="flex-1 mt-2 overflow-auto bg-gray-200 rounded-2xl">
            <Outlet />
          </section>

          {/* <nav className="flex items-center w-full gap-4 mb-6 border-b pb-3 bg-white p-3 rounded-xl shadow-sm">
            <Link
              className="font-medium hover:
          text-blue-600"
              to="/"
            >
              Home
            </Link>
            <Link className="font-medium hover:text-blue-600" to="/about">
              About
            </Link>
            <div>Welcome, {user ? user.name : "Guest"}!</div>

            {user ? (
              <button
                onClick={() => logout()}
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
          </nav> */}
        </main>
      </div>
    </SidebarProvider>
  );
}
