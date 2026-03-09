import { Table, Button, Card } from 'react-bootstrap';
import { expenseService } from '../services/api';
import { useBudget } from '../contexts/BudgetContext';

const ExpenseTable = ({ expenses, onEdit }) => {
  const { dispatch } = useBudget();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await expenseService.deleteExpense(id);
      dispatch({ type: 'DELETE_EXPENSE', payload: id });
    }
  };

  // Hàm định dạng ngày DD-MM-YYYY theo yêu cầu
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
  };

  return (
    <Card className="p-3 shadow-sm">
      <h5>Expense Management</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th><th>Amount</th><th>Category</th><th>Date</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(ex => (
            <tr key={ex.id}>
              <td>{ex.name}</td>
              <td>{Number(ex.amount).toLocaleString()}</td>
              <td>{ex.category}</td>
              <td>{formatDate(ex.date)}</td>
              <td>
                <Button variant="warning" size="sm" className="me-2" onClick={() => onEdit(ex)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(ex.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};
export default ExpenseTable;