// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./routes";
import "@fontsource-variable/montserrat";
import "./index.css";
import "./assets/custom.css";
import { Toaster } from "@/components/ui/sonner";
import { useAuth } from "@/store/userAuth";


const queryClient = new QueryClient();
// ⭐ Restore token dari cookie sebelum render
useAuth.getState().restore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          classNames: {
            toast: "bg-white text-black",
            success: "bg-green-500 text-white",
            error: "bg-red-500 text-white",
          },
        }}
      />
    </QueryClientProvider>
  </React.StrictMode>
);
