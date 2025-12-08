// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routes";
import { useAuth } from "@/store/userAuth";
import '@fontsource-variable/montserrat';
import "./index.css";


const queryClient = new QueryClient();

// ⭐ Restore token dari cookie sebelum render
useAuth.getState().restore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
