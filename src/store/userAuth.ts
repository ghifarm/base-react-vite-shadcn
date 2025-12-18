import { create } from 'zustand';
import Cookies from 'js-cookie';
import { supabase } from '@/api/supabaseClient';

interface Profile {
  id: string;
  name: string;
  username: string;
  phone: string;
  email: string;
}

interface SessionData {
  access_token: string | null;
  refresh_token: string | null;
}

interface AuthState {
  session: SessionData;
  profile: Profile | null;
  isAuthenticated: boolean;

  login: (payload: { access_token: string; refresh_token: string; profile: Profile }) => void;

  logout: () => void;
  restore: () => void;
  refresh: () => Promise<void>;
}

export const useAuth = create<AuthState>((set, get) => ({
  session: { access_token: null, refresh_token: null },
  profile: null,
  isAuthenticated: false,

  login: ({ access_token, refresh_token, profile }) => {
    set({
      session: { access_token, refresh_token },
      profile,
      isAuthenticated: true,
    });

    Cookies.set('sb_access_token', access_token, { expires: 7 });
    Cookies.set('sb_refresh_token', refresh_token, { expires: 7 });
    Cookies.set('sb_profile', JSON.stringify(profile), { expires: 7 });
  },

  logout: () => {
    Cookies.remove('sb_access_token');
    Cookies.remove('sb_refresh_token');
    Cookies.remove('sb_profile');

    set({
      session: { access_token: null, refresh_token: null },
      profile: null,
      isAuthenticated: false,
    });
  },

  restore: () => {
    const access = Cookies.get('sb_access_token');
    const refresh = Cookies.get('sb_refresh_token');
    const profileCookie = Cookies.get('sb_profile');

    if (!access || !refresh || !profileCookie) return;

    set({
      session: { access_token: access, refresh_token: refresh },
      profile: JSON.parse(profileCookie),
      isAuthenticated: true,
    });
  },

  refresh: async () => {
    const { refresh_token } = get().session;

    if (!refresh_token) return;

    const { data, error } = await supabase.auth.refreshSession({
      refresh_token,
    });

    if (error) {
      console.error('Refresh token gagal:', error);
      get().logout();
      return;
    }

    const { session } = data;

    if (!session) {
      console.error('Session tidak tersedia setelah refresh');
      get().logout();
      return;
    }

    // update cookie & zustand
    Cookies.set('sb_access_token', session.access_token);
    Cookies.set('sb_refresh_token', session.refresh_token);

    set({
      session: {
        access_token: session.access_token,
        refresh_token: session.refresh_token,
      },
    });
  },
}));
