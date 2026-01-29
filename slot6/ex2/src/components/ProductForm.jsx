// ProductForm.jsx
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function ProductForm() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form);
    alert('Product has been submitted:\n' + JSON.stringify(form, null, 2));
    // Có thể reset form nếu muốn
    // setForm({ name: '', price: '', category: '' });
  };

  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title>Exercise 3 - Add Product</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select name="category" value={form.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="Điện thoại">Phone</option>
              <option value="Laptop">Laptop</option>
              <option value="Phụ kiện">Accessory</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Product
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ProductForm;