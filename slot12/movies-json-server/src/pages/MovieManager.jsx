// src/pages/MovieManager.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import MovieForm from '../components/MovieForm';
import MovieTable from '../components/MovieTable';
import FilterBar from '../components/FilterBar';
import { useMovieState } from '../contexts/MovieContext';
import { Navigate } from 'react-router-dom';
import { useAuthState } from '../contexts/AuthContext';

const MovieManager = () => {
  const { user } = useAuthState();
  const { genres } = useMovieState();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">🎬 Quản lý Phim</h1>
      <MovieForm />
      <h2 className="mt-4">Danh sách Phim</h2>
      <FilterBar genres={genres} />
      <MovieTable />
    </Container>
  );
};

export default MovieManager;