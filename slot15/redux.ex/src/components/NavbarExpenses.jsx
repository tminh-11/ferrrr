import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';

function NavbarExpenses() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const displayName = user?.fullName || user?.username || 'User';

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm py-3">
      <Container fluid className="px-4 px-md-5">
        <Navbar.Brand className="d-flex align-items-center fw-bold fs-4">
          <img
            src="/images/pic.jpg"
            alt="Logo"
            width="38"
            height="38"
            className="d-inline-block align-top me-3 rounded-circle shadow-sm"
          />
          Personal Budget
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            {isAuthenticated && (
              <>
                <Navbar.Text className="text-white">
                  Signed in as <strong className="text-info">{displayName}</strong>
                </Navbar.Text>
                <Nav.Link
                  onClick={handleLogout}
                  className="text-danger fw-semibold px-3 py-2 rounded"
                  style={{ transition: 'all 0.2s' }}
                >
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExpenses;