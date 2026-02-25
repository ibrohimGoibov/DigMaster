import { create } from 'zustand';
import { axiosRequest, SaveToken } from '@/utils/axios';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  Register: (username: string, password: string, email: string, gender: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: (typeof window !== 'undefined') && !!localStorage.getItem("token"),
  isLoading: false,
  error: null,

  login: async (username, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosRequest.post("/login", { username, password });
      const { access_token } = response.data;
      SaveToken(access_token);
      set({ isAuthenticated: true, isLoading: false, error: null });
      return true;
    } catch (error: any) {
      const errorMessage = error.response?.data?.detail || "Ошибка сервера";
      set({ error: errorMessage, isLoading: false });
      return false;
    }
  },

  Register: async (username, password, email, gender) => {
    set({ isLoading: true, error: null });
    try {
      await axiosRequest.post("/register", { username, password, email, gender });
      
      set({ isLoading: false, error: null });
      return true;
    } catch (error: any) {
      const errorMessage = error.response?.data?.detail || "Ошибка при регистрации";
      set({ error: errorMessage, isLoading: false });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ isAuthenticated: false, error: null });
  },
}));