// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useReducer } from "react";
import { mockAccounts } from "../data/data";

const AuthContext = createContext();

// Reducer quản lý trạng thái auth [cite: 290]
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true, user: action.payload, error: null };
    case 'LOGIN_ERROR':
      return { ...state, isAuthenticated: false, user: null, error: action.payload };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null, error: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
    error: null
  });

  const login = (username, password) => {
    // Tìm user trong mock data 
    const user = mockAccounts.find(u => u.username === username && u.password === password);

    if (!user) {
      dispatch({ type: 'LOGIN_ERROR', payload: 'Sai tên đăng nhập hoặc mật khẩu!' });
    } else if (user.role !== 'admin') {
      // Chỉ admin mới được phép đăng nhập theo yêu cầu 
      dispatch({ type: 'LOGIN_ERROR', payload: 'Chỉ tài khoản Admin mới có quyền truy cập!' });
    } else if (user.status === 'locked') {
      dispatch({ type: 'LOGIN_ERROR', payload: 'Tài khoản đang bị khóa!' });
    } else {
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    }
  };

  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);