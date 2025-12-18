import { useMutation } from '@tanstack/react-query';
import { supabase } from './supabaseClient';
import { useAuth } from '@/store/userAuth';

interface SignupPayload {
  email: string;
  password: string;
  name: string;
  username: string;
  phone: string;
}

interface SignInPayload {
  identifier: string; // email atau username
  password: string;
}

export function useSignup() {
  return useMutation({
    mutationFn: async (payload: SignupPayload) => {
      const { email, password, name, username, phone } = payload;

      // 1️⃣ Buat akun supabase auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      const user = data.user;
      if (!user) throw new Error('User tidak terbentuk setelah sign up');

      // 2️⃣ Insert data profile ke table profiles
      const { error: profileError } = await supabase.from('profiles').insert({
        id: user.id, // foreign key ke auth.users
        name,
        username,
        phone,
        email, // ⬅ tambahkan email di sini
      });

      if (profileError) throw profileError;

      return data; // hasil signup
    },
  });
}

export function useSignIn() {
  const login = useAuth((s) => s.login);

  return useMutation({
    mutationFn: async ({ identifier, password }: SignInPayload) => {
      let email = identifier;

      if (!identifier.includes('@')) {
        const { data: profile, error: usernameError } = await supabase
          .from('profiles')
          .select('email')
          .eq('username', identifier)
          .single();

        if (usernameError || !profile) throw new Error('Username tidak ditemukan');

        email = profile.email;
      }

      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error('Login gagal');

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authData.user.id)
        .single();

      if (profileError) throw profileError;

      // ⬅️ SET ZUSTAND
      login({
        access_token: authData.session.access_token,
        refresh_token: authData.session.refresh_token,
        profile,
      });

      return {
        session: authData.session,
        user: authData.user,
        profile,
      };
    },
  });
}
