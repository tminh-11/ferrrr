// src/components/LoginForms.jsx
import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormCheck,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForms() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password, rememberMe });
    // Thêm logic đăng nhập thực tế ở đây (API call, etc.)
  };

  return (
    <div className="min-vh-100 d-flex flex-column flex-md-row overflow-hidden bg-light">
      {/* Left Side - Image Panel (ẩn trên mobile) */}
      <div
        className="d-none d-md-flex col-md-6 col-lg-7 position-relative overflow-hidden"
        style={{
          minHeight: '100vh',
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKD9psYJUnAs1ENJgFSF-4R5oKChob_aCUufqPthY0kOc17AiFRrlr1fVFCc3soSPUkZE6gCEl-sGQafhj3WR-HuEnGgZA735Ry5fyRZ1DJr8JtnY7jkbMwdTEUI-01E47V3PVRmItmsifkJZZqq3B4tnQlqZ7mBcdCGLlOmedc40BckYfFj3PbXNF3M-m4xh000IHKmeoNm8NPwsA0A6GlFZsXUIvN3pvJRF3Gqng0Ti-8Iz4UZxXDslxedH4g__o9dG4gu7ofeI")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="position-absolute inset-0 bg-dark bg-opacity-20 mix-blend-multiply"></div>

        {/* Logo */}
        <div className="position-absolute top-10 start-10 d-flex align-items-center gap-3 text-white z-10">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#f9f506',
            }}
          >
            <span className="material-symbols-outlined text-dark fs-4">bolt</span>
          </div>
          <h1 className="fs-3 fw-bold m-0">Nexus.</h1>
        </div>

        {/* Caption */}
        <div className="position-absolute bottom-20 start-10 end-10 text-white z-10">
          <p className="fs-1 fw-black lh-tight mb-3">
            Elevate your creative workflow.
          </p>
          <p className="fs-5 fw-light opacity-90">
            Experience the next generation of collaborative tools built for modern teams.
          </p>
        </div>
      </div>

      {/* Right Side - Form Panel */}
      <div className="flex-grow-1 d-flex align-items-center justify-content-center bg-light px-4 py-5 px-lg-5">
        <div style={{ maxWidth: '440px', width: '100%' }}>
          {/* Branding cho mobile */}
          <div className="d-flex d-md-none align-items-center gap-3 mb-5">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#f9f506',
              }}
            >
              <span className="material-symbols-outlined text-dark fs-4">bolt</span>
            </div>
            <h2 className="fs-4 fw-bold m-0">Nexus.</h2>
          </div>

          {/* Heading */}
          <div className="mb-5">
            <h2 className="display-5 fw-black mb-2">Welcome back</h2>
            <p className="text-muted fs-5">Enter your details to access your account.</p>
          </div>

          <Form noValidate onSubmit={handleSubmit}>
            {/* Username / Email */}
            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Username or Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="name@company.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-pill py-3 px-4 border border-2 shadow-sm"
                style={{ height: '56px' }}
                required
              />
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <Form.Label className="fw-semibold">Password</Form.Label>
                <a href="#" className="text-muted small fw-medium hover-underline">
                  Forgot password?
                </a>
              </div>

              <InputGroup className="rounded-pill overflow-hidden">
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-0 py-3 px-4 shadow-sm"
                  style={{ height: '56px' }}
                  required
                />
                <Button
                  variant="link"
                  className="px-4 text-muted"
                  onClick={togglePasswordVisibility}
                >
                  <span className="material-symbols-outlined">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </Button>
              </InputGroup>
            </Form.Group>

            {/* Remember Me */}
            <Form.Group className="mb-4">
              <FormCheck type="checkbox" id="remember-me">
                <FormCheck.Input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <FormCheck.Label className="text-muted">
                  Keep me signed in
                </FormCheck.Label>
              </FormCheck>
            </Form.Group>

            {/* Buttons */}
            <div className="d-grid gap-3">
              <Button
                type="submit"
                size="lg"
                className="rounded-pill fw-bold shadow"
                style={{
                  backgroundColor: '#f9f506',
                  borderColor: '#f9f506',
                  color: '#1c1c0d',
                  height: '56px',
                }}
              >
                Log In
              </Button>

              <Button
                variant="outline-secondary"
                size="lg"
                className="rounded-pill fw-medium"
                style={{ height: '48px' }}
              >
                Cancel
              </Button>
            </div>
          </Form>

          {/* Sign up link */}
          <div className="text-center mt-5">
            <p className="text-muted">
              Don't have an account?{' '}
              <a
                href="#"
                className="fw-bold text-dark text-decoration-underline"
                style={{ textDecorationColor: '#f9f506' }}
              >
                Sign up for free
              </a>
            </p>
          </div>

          {/* Footer links */}
          <div className="d-flex justify-content-center gap-4 mt-5">
            <a href="#" className="text-muted small text-decoration-none hover-underline">
              Privacy Policy
            </a>
            <a href="#" className="text-muted small text-decoration-none hover-underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForms;