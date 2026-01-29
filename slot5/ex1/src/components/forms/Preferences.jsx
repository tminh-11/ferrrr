// src/components/forms/Preferences.jsx
import React from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

function Preferences({ formData, onChange, errors, validated }) {
  return (
    <>
      <FloatingLabel controlId="gender" label="Giới tính" className="mb-3">
        <Form.Select
          name="gender"
          value={formData.gender}
          onChange={onChange}
          isInvalid={validated && !!errors.gender}
          required
        >
          <option value="">Chọn giới tính</option>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
          <option value="other">Khác</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.gender}
        </Form.Control.Feedback>
      </FloatingLabel>

      <Form.Group className="mb-4">
        <Form.Check
          type="checkbox"
          id="agreeTerms"
          label={
            <>
              Tôi đồng ý với{' '}
              <a href="#" className="text-primary">điều khoản dịch vụ</a> và{' '}
              <a href="#" className="text-primary">chính sách bảo mật</a>
            </>
          }
          name="agree"
          checked={formData.agree}
          onChange={onChange}
          isInvalid={validated && !!errors.agree}
          feedback={errors.agree}
          feedbackType="invalid"
          required
        />
      </Form.Group>
    </>
  );
}

export default Preferences;