// src/components/ExpensesDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchExpenses,  addExpense,  updateExpense,  deleteExpense,} from '../redux/slices/expensesSlice';
import NavbarExpenses from './NavbarExpenses';
import FooterExpenses from './FooterExpenses';
import ModalConfirm from './ModalConfirm';
import { formatCurrency, formatDate } from '../utils/formatters';

function ExpensesDashboard() {
  const dispatch = useDispatch();

  // Redux state
  const { user } = useSelector((state) => state.auth);
  const { items: expenses, loading: expensesLoading } = useSelector((state) => state.expenses);

  // Local state
  const [filterCategory, setFilterCategory] = useState('All categories');
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: 'Food',
    date: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Form validation
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  // Fetch expenses khi user đăng nhập
  useEffect(() => {
    if (user?.id) {
      dispatch(fetchExpenses(user.id));
    }
  }, [user, dispatch]);

  // Computed values
  const categories = [...new Set(expenses.map((e) => e.category))];

  const filteredExpenses =
    filterCategory === 'All categories'
      ? expenses
      : expenses.filter((e) => e.category === filterCategory);

  const totalExpenses = filteredExpenses.reduce(
    (sum, e) => sum + Number(e.amount),
    0
  );

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.amount || Number(formData.amount) <= 0)
      newErrors.amount = 'Amount must be greater than 0.';
    if (!formData.date) newErrors.date = 'Date is required.';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleReset = () => {
    setFormData({ name: '', amount: '', category: 'Food', date: '' });
    setEditingId(null);
    setValidated(false);
    setErrors({});
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setValidated(true);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const expenseData = {
      ...formData,
      userId: user.id,
      amount: Number(formData.amount),
    };

    if (editingId) {
      await dispatch(updateExpense({ id: editingId, ...expenseData }));
    } else {
      await dispatch(addExpense(expenseData));
    }

    handleReset();
  };

  const handleEdit = (expense) => {
    setFormData({
      name: expense.name,
      amount: expense.amount,
      category: expense.category,
      date: expense.date,
    });
    setEditingId(expense.id);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteExpense(deleteId));
    setShowDeleteModal(false);
    setDeleteId(null);
    if (editingId === deleteId) handleReset();
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#121212' }}>
      <NavbarExpenses />

      <Container fluid className="py-4 flex-grow-1">
        {/* Total + Filter */}
        <Row className="mb-4 g-4">
          <Col md={6}>
            <Card className="shadow border-0 h-100" style={{ backgroundColor: '#1e1e1e', color: '#fff' }}>
              <Card.Body className="text-center">
                <h5 className="mb-2 text-muted">Total of Expenses</h5>
                <h3 className="fw-bold text-primary">{formatCurrency(totalExpenses)}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow border-0 h-100" style={{ backgroundColor: '#1e1e1e', color: '#fff' }}>
              <Card.Body>
                <h5 className="mb-3 text-muted">Filter</h5>
                <Form.Label className="text-white">Category</Form.Label>
                <Form.Select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  style={{ backgroundColor: '#2d2d2d', color: '#fff', border: '1px solid #444' }}
                >
                  <option>All categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </Form.Select>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Form + Table */}
        <Row className="g-4">
          {/* Form Add/Edit */}
          <Col lg={4}>
            <Card className="shadow border-0 h-100" style={{ backgroundColor: '#1e1e1e', color: '#fff' }}>
              <Card.Header className="bg-primary text-white">
                <h5 className="mb-0">{editingId ? 'Edit Expense' : 'Add Expense'}</h5>
              </Card.Header>
              <Card.Body>
                <Form noValidate onSubmit={handleSave}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      isInvalid={validated && !!errors.name}
                      placeholder="e.g. Lunch"
                      style={{ backgroundColor: '#2d2d2d', color: '#fff', border: '1px solid #444' }}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                  </Form.Group>

                  <Row className="mb-3 g-3">
                    <Col sm={6}>
                      <Form.Label>Amount</Form.Label>
                      <Form.Control
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        isInvalid={validated && !!errors.amount}
                        placeholder="0"
                        style={{ backgroundColor: '#2d2d2d', color: '#fff', border: '1px solid #444' }}
                      />
                      <Form.Control.Feedback type="invalid">{errors.amount}</Form.Control.Feedback>
                    </Col>
                    <Col sm={6}>
                      <Form.Label>Category</Form.Label>
                      <Form.Select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        style={{ backgroundColor: '#2d2d2d', color: '#fff', border: '1px solid #444' }}
                      >
                        <option value="Food">Food</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Mua sắm">Mua sắm</option>
                      </Form.Select>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      isInvalid={validated && !!errors.date}
                      style={{ backgroundColor: '#2d2d2d', color: '#fff', border: '1px solid #444' }}
                    />
                    <Form.Control.Feedback type="invalid">{errors.date}</Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-flex gap-2">
                    <Button variant="secondary" onClick={handleReset} className="flex-fill">
                      Reset
                    </Button>
                    <Button variant="primary" type="submit" className="flex-fill">
                      {editingId ? 'Update' : 'Save'}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Table */}
          <Col lg={8}>
            <Card className="shadow border-0 h-100" style={{ backgroundColor: '#1e1e1e', color: '#fff' }}>
              <Card.Header className="bg-dark text-white">
                <h5 className="mb-0">Expense Management</h5>
              </Card.Header>
              <Card.Body className="p-0">
                <Table hover responsive className="mb-0" style={{ backgroundColor: '#1e1e1e' }}>
                  <thead className="table-dark">
                    <tr>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th style={{ width: '150px' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredExpenses.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-4 text-muted">
                          No expenses found
                        </td>
                      </tr>
                    ) : (
                      filteredExpenses.map((expense) => (
                        <tr key={expense.id}>
                          <td>{expense.name}</td>
                          <td className="fw-bold">{formatCurrency(expense.amount)}</td>
                          <td>{expense.category}</td>
                          <td>{formatDate(expense.date)}</td>
                          <td>
                            <Button
                              variant="warning"
                              size="sm"
                              className="me-2"
                              onClick={() => handleEdit(expense)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => handleDeleteClick(expense.id)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <FooterExpenses />

      {/* Modal Confirm Delete */}
      <ModalConfirm
        show={showDeleteModal}
        title="Confirm Delete"
        message="Are you sure you want to delete this expense? This action cannot be undone."
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowDeleteModal(false)}
      />
    </div>
  );
}

export default ExpensesDashboard;