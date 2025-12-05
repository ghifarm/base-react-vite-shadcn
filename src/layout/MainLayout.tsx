import { Link, Outlet } from "react-router-dom";
import { useUserStore } from "@/store/userAuth";

export default function MainLayout() {
  const user = useUserStore((s) => s.user);
  const logout = useUserStore((s) => s.logout);

  return (
    <div className="p-6">
      <nav className="flex gap-4 mb-6 border-b pb-3">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {user ? (
          <button onClick={logout} className="text-red-500 ml-auto">Logout</button>
        ) : (
          <Link className="ml-auto" to="/login">Login</Link>
        )}
      </nav>

      <Outlet />
    </div>
  );
}