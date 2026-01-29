// src/components/forms/PersonalInfo.jsx
import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

function PersonalInfo({ formData, onChange, errors, validated }) {
  return (
    <>
      <FloatingLabel controlId="fullName" label="Họ và tên" className="mb-3">
        <Form.Control
          type="text"
          name="fullName"
          placeholder="Họ và tên"
          value={formData.fullName}
          onChange={onChange}
          isInvalid={validated && !!errors.fullName}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.fullName}
        </Form.Control.Feedback>
      </FloatingLabel>

      <FloatingLabel controlId="email" label="Email" className="mb-3">
        <Form.Control
          type="email"
          name="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={onChange}
          isInvalid={validated && !!errors.email}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </FloatingLabel>
    </>
  );
}

export default PersonalInfo;