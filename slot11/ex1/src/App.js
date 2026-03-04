// src/App.js
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import CounterComponent from "./components/CounterComponent";
import LightSwitch from "./components/LightSwitch";
import LoginForm from "./components/LoginForm";
import MyNavbar from "./components/MyNavbar"; // Component mới
import './App.css';

function AppContent() {
  const { isAuthenticated } = useAuth();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('counter'); // Điều hướng giữa các component

  return (
    <div className="App" data-theme={theme}>
      {!isAuthenticated ? (
        // Nếu chưa đăng nhập: Chỉ hiện Form Login
        <div className="login-container">
          <LoginForm />
        </div>
      ) : (
        // Nếu đã đăng nhập thành công
        <>
          <MyNavbar setActiveTab={setActiveTab} activeTab={activeTab} />
          <div className="container mt-4">
            <div className="content-area">
              {activeTab === 'counter' ? <CounterComponent /> : <LightSwitch />}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;