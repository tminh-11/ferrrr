// components/NewCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

function NewCard({ newItem }) {
  return (
    <Card className="h-100 shadow-sm border-0">  {/* h-100 rất quan trọng */}
      <div className="image-wrapper">
        <Card.Img
          variant="top"
          src={newItem.images}
          alt={newItem.title}
          className="card-img-uniform"
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="card-title-fixed">{newItem.title}</Card.Title>
        <Card.Text className="flex-grow-1">{newItem.description}</Card.Text>
        {/* Nếu muốn thêm nút hoặc link */}
        {/* <div className="mt-auto">
          <Button variant="outline-primary" size="sm">Đọc thêm</Button>
        </div> */}
      </Card.Body>
    </Card>
  );
}

export default NewCard;