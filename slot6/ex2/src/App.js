// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LabNavbar from './components/LabNavbar';
import ProductQuantity from './components/ProductQuantity';
import OrderProcessing from './components/OrderProcessing';
import ProductForm from './components/ProductForm';
import TodoList from './components/TodoList';
import TestUseState from './components/TestUseState';

function App() {
  return (
    <Router>
      <LabNavbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<div><h2>Chọn một bài tập từ menu</h2></div>} />
          <Route path="/test-usestate" element={<TestUseState />} />
          <Route path="/ex1" element={<ProductQuantity />} />
          <Route path="/ex2" element={<OrderProcessing />} />
          <Route path="/ex3" element={<ProductForm />} />
          <Route path="/ex4" element={<TodoList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;