// src/components/forms/AccountInfo.jsx
import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

function AccountInfo({ formData, onChange, errors, validated }) {
  return (
    <>
      <FloatingLabel controlId="password" label="Mật khẩu" className="mb-3">
        <Form.Control
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={formData.password}
          onChange={onChange}
          isInvalid={validated && !!errors.password}
          required
          minLength={6}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          Ít nhất 6 ký tự, nên kết hợp chữ cái, số và ký tự đặc biệt.
        </Form.Text>
      </FloatingLabel>

      <Form.Group className="mb-3">
        <Form.Label>Vai trò</Form.Label>
        <div className="d-flex gap-4">
          <Form.Check
            inline
            type="radio"
            id="roleUser"
            label="User"
            name="role"
            value="user"
            checked={formData.role === 'user'}
            onChange={onChange}
          />
          <Form.Check
            inline
            type="radio"
            id="roleAdmin"
            label="Admin"
            name="role"
            value="admin"
            checked={formData.role === 'admin'}
            onChange={onChange}
          />
        </div>
      </Form.Group>
    </>
  );
}

export default AccountInfo;