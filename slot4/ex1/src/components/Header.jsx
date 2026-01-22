import { useState } from "react";
import { NavLink } from "react-router-dom";  // ← thay vì Link + Nav.Link
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleClose = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      variant="dark"
      bg="dark"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      collapseOnSelect
      className="shadow-sm"
      sticky="top"
    >
      <Container fluid="xxl">
        {/* Brand */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          onClick={handleClose}
          className="fw-bold fs-4 text-danger d-flex align-items-center gap-2"
        >
          🍕 <span>Pizza House</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="pizza-navbar-nav" />

        <Navbar.Collapse id="pizza-navbar-nav">
          {/* Left menu */}
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link
              as={NavLink}
              to="/"
              onClick={handleClose}
              className={({ isActive }) =>
                isActive
                  ? "active text-danger fw-bold"
                  : "text-white"
              }
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={handleClose}
              className={({ isActive }) =>
                isActive
                  ? "active text-danger fw-bold"
                  : "text-white"
              }
            >
              About Us
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              onClick={handleClose}
              className={({ isActive }) =>
                isActive
                  ? "active text-danger fw-bold"
                  : "text-white"
              }
            >
              Contact
            </Nav.Link>
          </Nav>

          {/* Right side - giữ nguyên */}
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <Form className="d-flex" role="search">
              <Form.Control
                type="search"
                placeholder="Search pizza, deals..."
                className="me-2 rounded-pill border-0 bg-dark-subtle text-white"
                style={{ minWidth: "180px" }}
              />
              <Button
                variant="outline-danger"
                className="rounded-pill fw-semibold px-4"
              >
                Search
              </Button>
            </Form>

            <Nav className="d-flex gap-2">
              <Nav.Link href="#" className="position-relative">
                🛒 Cart
              </Nav.Link>
              <Button
                variant="outline-light"
                size="sm"
                className="rounded-pill px-3"
              >
                Login
              </Button>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}