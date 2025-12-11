// src/components/Protected.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "@/store/userAuth";
import MainLayout from "@/layout/MainLayout";

export default function Protected() {
  const isAuth = useAuth((s) => s.isAuthenticated);
  return isAuth ? <MainLayout /> : <Navigate to="/login" replace />;
}
