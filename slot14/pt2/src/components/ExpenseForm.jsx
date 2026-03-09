import { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { expenseService } from '../services/api';
import { useBudget } from '../contexts/BudgetContext';

const ExpenseForm = ({ editItem, setEditItem }) => {
  const { state, dispatch } = useBudget();
  const [formData, setFormData] = useState({ name: '', amount: '', category: '', date: '' });

  useEffect(() => {
    if (editItem) setFormData(editItem);
    else setFormData({ name: '', amount: '', category: '', date: '' });
  }, [editItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || Number(formData.amount) <= 0) {
      alert("Name/Category cannot be empty and Amount must be > 0");
      return;
    }

    const payload = { ...formData, userId: state.user.id, amount: Number(formData.amount) };
    
    if (editItem) {
      const { data } = await expenseService.updateExpense(editItem.id, payload);
      dispatch({ type: 'UPDATE_EXPENSE', payload: data });
      setEditItem(null);
    } else {
      const { data } = await expenseService.addExpense(payload);
      dispatch({ type: 'ADD_EXPENSE', payload: data });
    }
    setFormData({ name: '', amount: '', category: '', date: '' });
  };

  return (
    <Card className="p-3 shadow-sm mb-4">
      <h5>{editItem ? 'Edit Expense' : 'Add Expense'}</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
        </Form.Group>
        <Button variant="success" type="submit" className="w-100">{editItem ? 'Update' : 'Add expense'}</Button>
      </Form>
    </Card>
  );
};
export default ExpenseForm;