import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from '../redux/slices/authSlice';
import ModalConfirm from './ModalConfirm';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [localErrors, setLocalErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation cục bộ
    const errors = {};
    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';
    if (password.length < 6) errors.password = 'Password must be at least 6 characters';
    if (Object.keys(errors).length > 0) {
      setLocalErrors(errors);
      return;
    }

    const result = await dispatch(loginThunk({ username, password }));

    if (loginThunk.fulfilled.match(result)) {
      const user = result.payload;
      console.log('✅ User logged in:', user);
      // Kiểm tra role admin và status
      
      if (result.payload.status === 'locked') {
        setLocalErrors({ message: 'Access is denied. Your account is locked.' });
        return;
      }

      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate('/');
      }, 2500);
    } else {
      setLocalErrors({ message: result.payload || 'Login failed' });
    }
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
    setLocalErrors({});
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="shadow-sm">
            <Card.Header className="bg-white py-3 text-center">
              <h3>Login</h3>
            </Card.Header>
            <Card.Body className="p-4">
              {(error || localErrors.message) && (
                <Alert variant="danger">{error || localErrors.message}</Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username or email</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setLocalErrors((prev) => ({ ...prev, username: '' }));
                    }}
                    isInvalid={!!localErrors.username}
                    disabled={loading}
                  />
                  <Form.Control.Feedback type="invalid">
                    {localErrors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setLocalErrors((prev) => ({ ...prev, password: '' }));
                    }}
                    isInvalid={!!localErrors.password}
                    disabled={loading}
                  />
                  <Form.Control.Feedback type="invalid">
                    {localErrors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex gap-2 mt-4">
                  <Button variant="primary" type="submit" className="flex-fill" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                  </Button>
                  <Button variant="secondary" type="button" className="flex-fill" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ModalConfirm
        show={showSuccessModal}
        title="Login Successful"
        message="You have successfully logged in. Redirecting to dashboard..."
        onConfirm={() => setShowSuccessModal(false)}
        onCancel={() => setShowSuccessModal(false)}
      />
    </Container>
  );
}

export default LoginForm;