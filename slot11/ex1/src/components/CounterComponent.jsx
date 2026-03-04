// src/components/CounterComponent.jsx
import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    case 'reset': return initialState;
    default: return state;
  }
}

function CounterComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { theme, toggleTheme } = useTheme();

  const buttonStyle = { margin: '5px', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold' };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '10px' }}>
      <h2>Bộ Đếm Đa Năng</h2>
      <p style={{ fontSize: '24px' }}>Giá trị: {state.count}</p>
      <Button 
        onClick={toggleTheme}
        style={{ ...buttonStyle, background: theme === 'light' ? '#6c757d' : '#f8f9fa', color: theme === 'light' ? '#fff' : '#000' }}
      >
        Chế độ: {theme === 'light' ? 'Dark' : 'Light'}
      </Button>
      <Button onClick={() => dispatch({ type: 'increment' })} style={{...buttonStyle, background: '#007bff', color: 'white'}}>Tăng</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })} style={{...buttonStyle, background: '#ffc107'}}>Giảm</Button>
    </div>
  );
}
export default CounterComponent;