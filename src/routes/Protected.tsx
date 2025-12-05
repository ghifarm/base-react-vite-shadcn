// src/components/Protected.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/store/userAuth";

export default function Protected() {
  const token = useAuth((s) => s.token);

  if (!token) return <Navigate to="/login" replace />;

  return <Outlet />;
}