// src/components/NavbarExpenses.jsx
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function NavbarExpenses() {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    // Nếu bạn có lưu token/user vào localStorage thì xóa ở đây
    // localStorage.removeItem('user');
    navigate('/login');
  };

  // Lấy tên hiển thị an toàn (fallback về username nếu fullName không có)
  const displayName = state.user?.fullName || state.user?.username || 'User';

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      className="shadow-sm py-3"
      sticky="top" // giữ navbar ở trên cùng khi scroll (tùy chọn)
    >
      <Container fluid className="px-4 px-md-5">
        {/* Brand + Logo */}
        <Navbar.Brand 
          className="d-flex align-items-center fw-bold fs-4"
          href="#home" // hoặc để trống nếu không cần link
        >
          <img
            src="/images/pic.jpg"           // thay bằng đường dẫn logo thật của bạn
            alt="Personal Budget Logo"
            width="38"
            height="38"
            className="d-inline-block align-top me-3 rounded-circle shadow-sm"
          />
          Personal Budget
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            {state.isAuthenticated && state.user && (
              <>
                <Navbar.Text className="text-white me-0 me-md-4">
                  Signed in as <strong className="text-info">{displayName}</strong>
                </Navbar.Text>

                <Nav.Link
                  onClick={handleLogout}
                  className="text-danger fw-semibold px-3 py-2 rounded hover-bg-danger-light"
                  style={{
                    transition: 'all 0.2s ease',
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* CSS inline hoặc bạn có thể đưa vào file CSS riêng */}
      <style jsx>{`
        .hover-bg-danger-light:hover {
          background-color: rgba(220, 53, 69, 0.1);
        }
        @media (max-width: 991px) {
          .navbar-nav {
            margin-top: 1rem;
          }
          .navbar-text {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default NavbarExpenses;