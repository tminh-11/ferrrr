// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import { AuthProvider } from './contexts/AuthContext';
import MovieManager from './pages/MovieManager';
import Login from './components/Login';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <MovieProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<MovieManager />} />
            </Routes>
          </div>
        </Router>
      </MovieProvider>
    </AuthProvider>
  );
}

export default App;