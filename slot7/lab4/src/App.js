import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Ex1Quantity from './components/Ex1Quantity';
import Ex2Modal from './components/Ex2Modal';
import Ex3ProductForm from './components/Ex3ProductForm';
import Ex4TodoList from './components/Ex4TodoList';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Lab 4 - useReducer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ex1">Ex 1</Nav.Link>
            <Nav.Link as={Link} to="/ex2">Ex 2</Nav.Link>
            <Nav.Link as={Link} to="/ex3">Ex 3</Nav.Link>
            <Nav.Link as={Link} to="/ex4">Ex 4</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/ex1" element={<Ex1Quantity />} />
          <Route path="/ex2" element={<Ex2Modal />} />
          <Route path="/ex3" element={<Ex3ProductForm />} />
          <Route path="/ex4" element={<Ex4TodoList />} />
          <Route path="/" element={<h3>Chọn bài tập từ Menu phía trên</h3>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;