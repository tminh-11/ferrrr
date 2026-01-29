import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LabNavbar() {                           // ← changed name
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Lab 3 - useState</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/test-usestate">Test useState Form</Nav.Link>
            <Nav.Link as={Link} to="/ex1">Exercise 1</Nav.Link>
            <Nav.Link as={Link} to="/ex2">Exercise 2</Nav.Link>
            <Nav.Link as={Link} to="/ex3">Exercise 3</Nav.Link>
            <Nav.Link as={Link} to="/ex4">Exercise 4</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LabNavbar;                        // ← export the new name