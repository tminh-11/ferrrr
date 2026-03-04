import React from 'react';
import { Table, Button, Image, Modal, Alert, Spinner } from 'react-bootstrap';
import { useMovieState, useMovieDispatch } from '../contexts/MovieContext';

const MovieTable = () => {
  const state = useMovieState();
  const { dispatch, confirmDelete } = useMovieDispatch();
  const { movies, genres, loading, movieToDelete, showDeleteModal } = state;

  const genreMap = genres.reduce((map, genre) => {
    map[genre.id] = genre.name;
    return map;
  }, {});

  const handleEdit = (movie) => dispatch({ type: 'OPEN_EDIT_MODAL', payload: movie });
  const handleDelete = (movie) => dispatch({ type: 'OPEN_DELETE_MODAL', payload: movie });

  return (
    <>
      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="light" />
          <p className="mt-3 text-muted">Đang tải danh sách phim...</p>
        </div>
      ) : movies.length === 0 ? (
        <Alert variant="warning" className="text-center my-5">
          Chưa có phim nào. Hãy thêm phim mới!
        </Alert>
      ) : (
        <Table striped bordered hover responsive variant="dark" className="shadow">
          <thead className="table-dark">
            <tr>
              <th style={{ width: '80px' }}>Ảnh</th>
              <th>ID</th>
              <th>Tên phim</th>
              <th>Thể loại</th>
              <th>Thời lượng</th>
              <th style={{ width: '180px' }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              const genreName = genreMap[movie.genreId] || 'Không xác định';
              return (
                <tr key={movie.id}>
                  <td>
                    <Image
                      src={`http://localhost:3001${movie.avatar}`}
                      alt={movie.title}
                      style={{ width: '60px', height: '85px', objectFit: 'cover' }}
                      rounded
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/60x85?text=No+Image';
                        e.target.onerror = null;
                      }}
                    />
                  </td>
                  <td className="align-middle">#{movie.id}</td>
                  <td className="align-middle">
                    <strong>{movie.title}</strong>
                    <br />
                    <small className="text-muted">({movie.year})</small>
                  </td>
                  <td className="align-middle">{genreName}</td>
                  <td className="align-middle">{movie.duration} phút</td>
                  <td className="align-middle">
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEdit(movie)}
                    >
                      Sửa
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDelete(movie)}>
                      Xóa
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}

      <Modal show={showDeleteModal} onHide={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })} centered>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn muốn xóa phim <strong>"{movieToDelete?.title}"</strong> (ID: {movieToDelete?.id}) không?
          <br />
          <small className="text-danger">Hành động này không thể hoàn tác.</small>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}>
            Hủy
          </Button>
          <Button variant="danger" onClick={() => confirmDelete(movieToDelete?.id)}>
            Xóa phim
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieTable;