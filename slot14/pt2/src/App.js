import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BudgetProvider } from './contexts/BudgetContext';
import Login from './pages/Login';
import Home from './pages/Home';

// Import CSS của Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          {/* 1. Trang mặc định: Tự động chuyển hướng về /login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* 2. Route dành cho trang Đăng nhập */}
          <Route path="/login" element={<Login />} />

          {/* 3. Route dành cho trang quản lý Dashboard */}
          <Route path="/home" element={<Home />} />

          {/* 4. Xử lý các đường dẫn không tồn tại: Quay về login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  );
}

export default App;