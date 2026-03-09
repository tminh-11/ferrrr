import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { useBudget } from '../contexts/BudgetContext';
import { expenseService } from '../services/api';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

const Home = () => {
  const { state, dispatch } = useBudget();
  const [filter, setFilter] = useState('');
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
  const fetchExpenses = async () => {
    // Ưu tiên lấy từ state, nếu chưa có thì lấy tạm từ localStorage
    const currentUser = state.user || JSON.parse(localStorage.getItem('user'));
    
    if (currentUser && currentUser.id) {
      try {
        const { data } = await expenseService.getExpenses(currentUser.id);
        dispatch({ type: 'SET_EXPENSES', payload: data });
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
  };

  fetchExpenses();
}, [state.user, dispatch]);

  const filtered = state.expenses.filter(ex => 
    ex.category.toLowerCase().includes(filter.toLowerCase())
  );

  const total = filtered.reduce((sum, ex) => sum + Number(ex.amount), 0);

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Header />
      <Container className="mt-4">
        <Row className="mb-4">
          <Col md={6}>
            <Card className="text-center bg-primary text-white p-4 shadow">
              <h4>Total of Expenses</h4>
              <h2>{total.toLocaleString()} ₫</h2>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="p-4 shadow-sm h-100">
              <Form.Label>Filter by Category</Form.Label>
              <Form.Control placeholder="Category (e.g., Food)" onChange={e => setFilter(e.target.value)} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4}><ExpenseForm editItem={editItem} setEditItem={setEditItem} /></Col>
          <Col md={8}><ExpenseTable expenses={filtered} onEdit={setEditItem} /></Col>
        </Row>
      </Container>
      <footer className="text-center py-4 border-top mt-5">
        <p>© 2025 PersonalBudget Management Application</p>
      </footer>
    </div>
  );
};
export default Home;