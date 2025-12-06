// src/components/Protected.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "@/store/userAuth";
import MainLayout from "@/layout/MainLayout";

export default function Protected() {
  const token = useAuth((s) => s.token);

  if (!token) return <Navigate to="/login" replace />;

  return <MainLayout />;
}