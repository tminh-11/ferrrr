// src/components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

function MyNavbar({ setActiveTab, activeTab }) {
  const { logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">React Context Lab</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              active={activeTab === 'counter'} 
              onClick={() => setActiveTab('counter')}
            >
              Counter
            </Nav.Link>
            <Nav.Link 
              active={activeTab === 'lightswitch'} 
              onClick={() => setActiveTab('lightswitch')}
            >
              Light Switch
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <span className="me-3 text-muted">Chào, <strong>{user?.username}</strong></span>
            <Button variant="outline-primary" size="sm" onClick={toggleTheme} className="me-2">
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </Button>
            <Button variant="danger" size="sm" onClick={logout}>Đăng xuất</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;