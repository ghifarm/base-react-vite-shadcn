import { create } from "zustand";
import Cookies from "js-cookie";

type AuthState = {
  user: any | null;
  token: string | null;
  login: (user: any, token: string) => void;
  logout: () => void;
  restore: () => void;
};

export const useAuth = create<AuthState>((set) => ({
  user: null,
  token: null,

  login: (user, token) => {
    Cookies.set("auth_token", token, {
      expires: 1,         // cookie 1 day
      sameSite: "Strict",
      secure: true,
    });

    set({ user, token });
  },

  logout: () => {
    Cookies.remove("auth_token");
    set({ user: null, token: null });
  },

  restore: () => {
    const token = Cookies.get("auth_token");
    if (token) set({ token });
  },
}));