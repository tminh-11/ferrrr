// ProductQuantity.jsx
import { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);

  const decrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const increase = () => setQuantity(quantity + 1);

  return (
    <div className="my-4">
      <h5>Exercise 1 - ProductQuantity</h5>
      <InputGroup style={{ width: '200px' }}>
        <Button variant="outline-secondary" onClick={decrease}>-</Button>
        <FormControl
          type="number"
          value={quantity}
          readOnly
          className="text-center"
        />
        <Button variant="outline-secondary" onClick={increase}>+</Button>
      </InputGroup>
    </div>
  );
}

export default ProductQuantity;