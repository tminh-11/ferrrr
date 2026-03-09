import { Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useBudget } from '../contexts/BudgetContext';

const Header = () => {
  const { state, dispatch } = useBudget();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" className="px-4 justify-content-between">
      <Navbar.Brand href="#">PersonalBudget</Navbar.Brand>
      <div className="text-white d-flex align-items-center">
        <span className="me-3">Signed in as: {state.user?.fullName}</span>
        <Button variant="outline-light" size="sm" onClick={handleLogout}>Logout</Button>
      </div>
    </Navbar>
  );
};
export default Header;