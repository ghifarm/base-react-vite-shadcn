import { useMutation } from "@tanstack/react-query";
import { supabase } from "./supabaseClient";

interface SignupPayload {
  email: string;
  password: string;
  name: string;
  username: string;
  phone: string;
}

export function useSignup() {
  return useMutation({
    mutationFn: async (payload: SignupPayload) => {
      const { email, password, name, username, phone } = payload;

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name, username, phone },
        },
      });

      if (error) throw error;
      return data;
    },
  });
}
