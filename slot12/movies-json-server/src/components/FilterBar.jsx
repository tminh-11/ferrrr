import React, { useState } from 'react';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import { useMovieDispatch } from '../contexts/MovieContext';

const FilterBar = ({ genres }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genreId, setGenreId] = useState('');
  const [minDuration, setMinDuration] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const { fetchMovies } = useMovieDispatch();

  const applyFilter = async () => {
    const params = new URLSearchParams();

    if (searchTerm.trim()) params.append('q', searchTerm.trim());
    if (genreId) params.append('genreId', genreId);
    if (minDuration && !isNaN(minDuration) && minDuration > 0) params.append('duration_gte', minDuration);

    params.append('_sort', 'title');
    params.append('_order', sortOrder);

    const query = params.toString() ? `/movies?${params.toString()}` : '/movies';

    await fetchMovies(query);
  };

  return (
    <Form className="mb-4 bg-dark p-3 rounded shadow">
      <Row className="g-3 align-items-end">
        <Col md={4}>
          <Form.Label>Tìm theo tên phim</Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Nhập tên phim..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>

        <Col md={3}>
          <Form.Label>Thể loại</Form.Label>
          <Form.Select value={genreId} onChange={(e) => setGenreId(e.target.value)}>
            <option value="">Tất cả thể loại</option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </Form.Select>
        </Col>

        <Col md={2}>
          <Form.Label>Thời lượng tối thiểu</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phút"
            min={0}
            value={minDuration}
            onChange={(e) => setMinDuration(e.target.value)}
          />
        </Col>

        <Col md={2}>
          <Form.Label>Sắp xếp</Form.Label>
          <Form.Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">A → Z</option>
            <option value="desc">Z → A</option>
          </Form.Select>
        </Col>

        <Col md={1} className="d-flex align-items-end">
          <Button variant="primary" className="w-100" onClick={applyFilter}>
            Lọc
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterBar;