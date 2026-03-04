import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal, Image, Spinner } from 'react-bootstrap';
import { useMovieState, useMovieDispatch } from '../contexts/MovieContext';
import { initialMovieState } from '../reducers/movieReducers';

const MovieFields = ({ currentMovie, handleInputChange, handleFileChange, imagePreview, genres, errors = {}, validated = false }) => (
  <>
    <Row className="mb-4">
      <Col md={6}>
        <Form.Group controlId="formAvatar">
          <Form.Label>Ảnh đại diện phim</Form.Label>
          <Form.Control
            type="file"
            name="avatarFile"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-3"
          />
          <Form.Control
            type="text"
            name="avatar"
            value={currentMovie.avatar || ''}
            onChange={handleInputChange}
            placeholder="Hoặc dán URL ảnh[](https://...)"
            required
            isInvalid={validated && errors.avatar}
          />
          <Form.Control.Feedback type="invalid">{errors.avatar || 'Vui lòng cung cấp ảnh'}</Form.Control.Feedback>
          {imagePreview && (
            <div className="mt-3 text-center">
              <Image
                src={imagePreview}
                alt="Preview"
                thumbnail
                style={{ maxWidth: '220px', maxHeight: '300px', objectFit: 'cover' }}
                rounded
              />
            </div>
          )}
        </Form.Group>
      </Col>

      <Col md={6}>
        <Form.Group controlId="formTitle" className="mb-3">
          <Form.Label>Tên phim <span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={currentMovie.title || ''}
            onChange={handleInputChange}
            placeholder="Ví dụ: Inception"
            required
            minLength={2}
            isInvalid={validated && errors.title}
            isValid={validated && !errors.title}
          />
          <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Mô tả <span className="text-danger">*</span></Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="description"
            value={currentMovie.description || ''}
            onChange={handleInputChange}
            placeholder="Tóm tắt nội dung phim..."
            required
            minLength={10}
            isInvalid={validated && errors.description}
            isValid={validated && !errors.description}
          />
          <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
        </Form.Group>
      </Col>
    </Row>

    <Row className="mb-4">
      <Col md={3}>
        <Form.Group controlId="formGenre">
          <Form.Label>Thể loại <span className="text-danger">*</span></Form.Label>
          <Form.Select
            name="genreId"
            value={currentMovie.genreId || ''}
            onChange={handleInputChange}
            required
            isInvalid={validated && errors.genreId}
            isValid={validated && !errors.genreId}
          >
            <option value="">Chọn thể loại</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">{errors.genreId}</Form.Control.Feedback>
        </Form.Group>
      </Col>

      <Col md={3}>
        <Form.Group controlId="formDuration">
          <Form.Label>Thời lượng (phút) <span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="number"
            name="duration"
            value={currentMovie.duration || ''}
            onChange={handleInputChange}
            placeholder="Ví dụ: 120"
            required
            min={1}
            max={600}
            isInvalid={validated && errors.duration}
            isValid={validated && !errors.duration}
          />
          <Form.Control.Feedback type="invalid">{errors.duration}</Form.Control.Feedback>
        </Form.Group>
      </Col>

      <Col md={3}>
        <Form.Group controlId="formYear">
          <Form.Label>Năm phát hành <span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="number"
            name="year"
            value={currentMovie.year || ''}
            onChange={handleInputChange}
            placeholder="Ví dụ: 2023"
            required
            min={1900}
            max={2035}
            isInvalid={validated && errors.year}
            isValid={validated && !errors.year}
          />
          <Form.Control.Feedback type="invalid">{errors.year}</Form.Control.Feedback>
        </Form.Group>
      </Col>

      <Col md={3}>
        <Form.Group controlId="formCountry">
          <Form.Label>Quốc gia <span className="text-danger">*</span></Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={currentMovie.country || ''}
            onChange={handleInputChange}
            placeholder="Ví dụ: USA"
            required
            isInvalid={validated && errors.country}
            isValid={validated && !errors.country}
          />
          <Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>
        </Form.Group>
      </Col>
    </Row>
  </>
);

const MovieForm = () => {
  const state = useMovieState();
  const { dispatch, handleCreateOrUpdate } = useMovieDispatch();
  const { currentMovie, isEditing, showEditModal, genres, loading } = state;

  const [imagePreview, setImagePreview] = useState('');
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', payload: { name, value } });
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const url = event.target.result;
        setImagePreview(url);
        dispatch({ type: 'UPDATE_FIELD', payload: { name: 'avatar', value: url } });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCloseEditModal = () => {
    dispatch({ type: 'CLOSE_EDIT_MODAL' });
    setImagePreview('');
    setValidated(false);
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!currentMovie.title?.trim()) newErrors.title = 'Tên phim là bắt buộc';
    else if (currentMovie.title.trim().length < 2) newErrors.title = 'Tên phim quá ngắn';

    if (!currentMovie.description?.trim()) newErrors.description = 'Mô tả là bắt buộc';
    else if (currentMovie.description.trim().length < 10) newErrors.description = 'Mô tả quá ngắn';

    if (!currentMovie.genreId) newErrors.genreId = 'Vui lòng chọn thể loại';
    if (!currentMovie.duration) newErrors.duration = 'Thời lượng là bắt buộc';
    else if (+currentMovie.duration < 1 || +currentMovie.duration > 600) newErrors.duration = 'Thời lượng không hợp lệ';

    if (!currentMovie.year) newErrors.year = 'Năm phát hành là bắt buộc';
    else if (+currentMovie.year < 1900 || +currentMovie.year > 2035) newErrors.year = 'Năm không hợp lệ';

    if (!currentMovie.country?.trim()) newErrors.country = 'Quốc gia là bắt buộc';
    if (!currentMovie.avatar?.trim()) newErrors.avatar = 'Ảnh đại diện là bắt buộc';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const form = e.currentTarget;
    setValidated(true);

    if (form.checkValidity() === false || !validateForm()) {
      return;
    }

    const dataToSend = {
      ...currentMovie,
      duration: parseInt(currentMovie.duration, 10) || 0,
      year: parseInt(currentMovie.year, 10) || 0,
      genreId: parseInt(currentMovie.genreId, 10) || 1,
    };

    const success = await handleCreateOrUpdate(dataToSend, !!isEditing, isEditing);
    if (success) {
      if (!isEditing) {
        // Reset form khi thêm mới thành công
        dispatch({ type: 'RESET_FORM' });
        setImagePreview('');
      }
      setValidated(false);
      setErrors({});
      handleCloseEditModal();
    }
  };

  const isCreating = isEditing === null;
  const formProps = {
    currentMovie: isCreating ? currentMovie : initialMovieState.currentMovie,
    handleInputChange: isCreating ? handleInputChange : () => {},
    handleFileChange: isCreating ? handleFileChange : () => {},
    imagePreview: isCreating ? imagePreview : currentMovie.avatar,
    genres,
    errors: isCreating ? errors : {},
    validated: isCreating ? validated : false,
  };

  return (
    <>
      <Container className="p-4 mb-5 bg-dark text-light rounded shadow">
        <h3 className="mb-4 text-center">
          {isCreating ? '➕ Thêm phim mới' : '✏️ Chỉnh sửa phim'}
        </h3>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <MovieFields {...formProps} />

          <div className="d-flex justify-content-end gap-3 mt-4">
            {!isCreating && (
              <Button variant="secondary" onClick={handleCloseEditModal}>
                Hủy
              </Button>
            )}
            <Button variant={isCreating ? 'success' : 'warning'} type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Đang xử lý...
                </>
              ) : isCreating ? (
                'Thêm phim'
              ) : (
                'Lưu thay đổi'
              )}
            </Button>
          </div>
        </Form>
      </Container>

      {/* Modal chỉnh sửa dùng chung logic nhưng hiển thị riêng */}
      <Modal show={showEditModal} onHide={handleCloseEditModal} size="lg" centered>
        <Modal.Header closeButton className="bg-dark text-light border-0">
          <Modal.Title>Chỉnh sửa phim ID: {isEditing}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <MovieFields
              currentMovie={currentMovie}
              handleInputChange={handleInputChange}
              handleFileChange={handleFileChange}
              imagePreview={currentMovie.avatar}
              genres={genres}
              errors={errors}
              validated={validated}
            />
            <div className="d-flex justify-content-end gap-3 mt-4">
              <Button variant="secondary" onClick={handleCloseEditModal}>
                Hủy
              </Button>
              <Button variant="warning" type="submit" disabled={loading}>
                {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MovieForm;