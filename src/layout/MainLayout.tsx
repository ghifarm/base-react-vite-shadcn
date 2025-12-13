import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/store/userAuth";
import Navbar from "@/components/widget/Navbar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/widget/AppSidebar";

export default function MainLayout() {
  const user = useAuth((s) => s.profile);
  const logout = useAuth.getState().logout;

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <SidebarProvider open={sidebarOpen} onOpenChange={setSidebarOpen}>
      {/* Sidebar fixed */}
      <AppSidebar />

      {/* INSET UNTUK MAIN CONTENT */}
      <SidebarInset>
        <main className="flex flex-col h-screen p-4 w-full">
          <header className="sticky top-4 z-50">
            <Navbar profile={user || { name: "Guest", email: "" }} logout={logout} />
          </header>

          <section className="flex-1 mt-2 overflow-auto bg-gray-200 rounded-2xl">
            <Outlet />
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
