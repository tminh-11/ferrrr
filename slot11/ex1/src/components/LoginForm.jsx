// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, logout, user, error, isAuthenticated } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) return alert("Vui lòng nhập đầy đủ thông tin!");
    login(username, password);
  };

  if (isAuthenticated) {
    return (
      <Alert variant="success">
        Chào mừng Admin: {user.username}! <Button onClick={logout} variant="link">Đăng xuất</Button>
      </Alert>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Đăng nhập (Chỉ Admin)</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button type="submit" variant="primary">Đăng nhập</Button>
      </Form>
    </div>
  );
}
export default LoginForm;