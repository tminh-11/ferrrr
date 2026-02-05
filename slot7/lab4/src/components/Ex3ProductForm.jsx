import React, { useReducer } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const initialState = { name: '', price: '', category: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT': 
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM': 
      return initialState;
    default: return state;
  }
}

export default function Ex3ProductForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: 'CHANGE_INPUT', field: e.target.name, value: e.target.value });
  };

  return (
    <Card className="p-4 shadow-sm">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control name="name" value={state.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Giá</Form.Label>
          <Form.Control name="price" value={state.price} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Danh mục</Form.Label>
          <Form.Control name="category" value={state.category} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" className="me-2">Lưu</Button>
        <Button variant="warning" onClick={() => dispatch({ type: 'RESET_FORM' })}>Reset</Button>
      </Form>
      <div className="mt-3">
        <strong>Dữ liệu Preview:</strong> {JSON.stringify(state)}
      </div>
    </Card>
  );
}