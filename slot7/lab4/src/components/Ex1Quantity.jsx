import React, { useReducer } from 'react';
import { Button, InputGroup, FormControl, Card } from 'react-bootstrap';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1 };
    case 'DECREMENT': return { count: Math.max(0, state.count - 1) };
    case 'SET_INPUT': return { count: parseInt(action.payload) || 0 };
    default: return state;
  }
}

export default function Ex1Quantity() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Product Quantity</Card.Title>
        <InputGroup>
          <Button variant="outline-secondary" onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>
          <FormControl 
            value={state.count} 
            onChange={(e) => dispatch({ type: 'SET_INPUT', payload: e.target.value })}
            className="text-center"
          />
          <Button variant="outline-secondary" onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>
        </InputGroup>
      </Card.Body>
    </Card>
  );
}