import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AccountList from './pages/AccountList';
import AccountDetails from './pages/AccountDetails';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/accounts" element={<AccountList />} />
          <Route path="/accounts/:id" element={<AccountDetails />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;