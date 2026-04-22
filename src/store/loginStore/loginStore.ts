import { create } from 'zustand';
import { axiosRequest, SaveToken } from '@/utils/axios';

// ДОБАВЛЯЕМ ТИП ДЛЯ ПОЛЬЗОВАТЕЛЯ
interface User {
  username: string;
  email?: string;
  gender?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  user: User | null;  // <--- ДОБАВЛЯЕМ
  login: (username: string, password: string) => Promise<boolean>;
  Register: (username: string, password: string, email: string, gender: string) => Promise<boolean>;
  logout: () => void;
  loginWithGoogle: (googleToken: string) => Promise<boolean>;
  fetchUser: () => Promise<void>;  // <--- ДОБАВЛЯЕМ ФУНКЦИЮ ДЛЯ ПОЛУЧЕНИЯ ДАННЫХ
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: (typeof window !== 'undefined') && !!localStorage.getItem("token"),
  isLoading: false,
  error: null,
  user: (typeof window !== 'undefined') ? (() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  })() : null,  // <--- ВОССТАНАВЛИВАЕМ ПОЛЬЗОВАТЕЛЯ ПРИ ЗАГРУЗКЕ

  login: async (username, password) => {
  set({ isLoading: true, error: null });
  try {
    const response = await axiosRequest.post("/login", { username, password });
    const { access_token } = response.data;
    SaveToken(access_token);
    
    // СОХРАНЯЕМ USERNAME
    const userData = { username: username };
    localStorage.setItem("user", JSON.stringify(userData));
    
    set({ 
      isAuthenticated: true, 
      isLoading: false, 
      error: null,
      user: userData 
    });
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

  loginWithGoogle: async (googleToken: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosRequest.post("/auth/google", { token: googleToken });
      const { access_token } = response.data;
      SaveToken(access_token);
      
      // ПОСЛЕ УСПЕШНОГО ВХОДА ЧЕРЕЗ GOOGLE ЗАГРУЖАЕМ ДАННЫЕ ПОЛЬЗОВАТЕЛЯ
      await get().fetchUser();
      
      set({ isAuthenticated: true, isLoading: false, error: null });
      return true;
    } catch (error: any) {
      const errorMessage = error.response?.data?.detail || "Ошибка Google авторизации";
      set({ error: errorMessage, isLoading: false });
      return false;
    }
  },

  // НОВАЯ ФУНКЦИЯ — ПОЛУЧАЕТ ДАННЫЕ ПОЛЬЗОВАТЕЛЯ С БЭКЕНДА
  fetchUser: async () => {
    try {
      const response = await axiosRequest.get("/me");
      const userData = response.data;
      
      localStorage.setItem("user", JSON.stringify(userData));
      set({ user: userData });
    } catch (error) {
      console.error("Ошибка при получении пользователя:", error);
      // Если не получилось получить данные, пробуем вытащить username из токена
      const token = localStorage.getItem("token");
      if (token) {
        try {
          // Простой парсинг JWT (без проверки подписи)
          const payload = JSON.parse(atob(token.split('.')[1]));
          const fallbackUser = { username: payload.sub, gender: payload.gender };
          localStorage.setItem("user", JSON.stringify(fallbackUser));
          set({ user: fallbackUser });
        } catch {
          set({ user: null });
        }
      }
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    set({ isAuthenticated: false, error: null, user: null });
  },
}));