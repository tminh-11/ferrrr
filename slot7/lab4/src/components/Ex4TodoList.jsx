import React, { useReducer, useState } from 'react';
import { Form, Button, ListGroup, InputGroup } from 'react-bootstrap';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK': 
      return [...state, { id: Date.now(), text: action.payload }];
    case 'DELETE_TASK': 
      return state.filter(task => task.id !== action.payload); 
    default: return state;
  }
}

export default function Ex4TodoList() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TASK', payload: inputValue });
      setInputValue('');
    }
  };

  return (
    <div style={{ maxWidth: '400px' }}>
      <h3>Todo List</h3>
      <InputGroup className="mb-3">
        <Form.Control 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Nhập công việc..."
        />
        <Button variant="success" onClick={handleAdd}>Thêm</Button>
      </InputGroup>

      <ListGroup>
        {tasks.map(task => (
          <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
            {task.text}
            <Button variant="danger" size="sm" onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}>Xóa</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}