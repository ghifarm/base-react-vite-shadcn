import axios from 'axios';
import { useAuth } from '@/store/userAuth';

export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

api.interceptors.request.use(async (config) => {
  const access_token = useAuth.getState().session.access_token;

  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      await useAuth.getState().refresh();
      const access_token = useAuth.getState().session.access_token;
      if (access_token) {
        error.config.headers.Authorization = `Bearer ${access_token}`;
        return api(error.config);
      }
    }
    return Promise.reject(error);
  },
);
