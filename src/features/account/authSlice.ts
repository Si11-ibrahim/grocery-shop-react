import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, User } from '@/types';

const loadUserFromStorage = (): User | null => {
  try {
    const saved = localStorage.getItem('saffron-user');
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

const initialState: AuthState = {
  user: loadUserFromStorage(),
  isAuthenticated: !!loadUserFromStorage(),
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      localStorage.setItem('saffron-user', JSON.stringify(action.payload));
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      localStorage.removeItem('saffron-user');
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, logout, setLoading } = authSlice.actions;

// Selectors
export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated;
export const selectIsAuthLoading = (state: { auth: AuthState }) => state.auth.isLoading;

export default authSlice.reducer;
