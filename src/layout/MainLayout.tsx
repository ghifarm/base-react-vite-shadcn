import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '@/store/userAuth';
import Navbar from '@/components/widget/Navbar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/widget/AppSidebar';

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
        <main className="flex h-screen w-full flex-col py-4 ps-4 pe-4 sm:ps-0">
          <header className="sticky top-4 z-50">
            <Navbar profile={user || { name: 'Guest', email: '' }} logout={logout} />
          </header>

          <section className="mt-2 flex-1 overflow-auto rounded-2xl bg-gray-200 p-4">
            <Outlet />
          </section>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
