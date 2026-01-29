// src/components/forms/RegistrationForm.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Button, Alert, Accordion } from 'react-bootstrap';
import PersonalInfo from './PersonalInfo';
import AccountInfo from './AccountInfo';
import Preferences from './Preferences';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', password: '', gender: '', role: 'user', agree: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Họ tên là bắt buộc';
    if (!formData.email.includes('@')) newErrors.email = 'Email không hợp lệ';
    if (formData.password.length < 6) newErrors.password = 'Mật khẩu ít nhất 6 ký tự';
    if (!formData.gender) newErrors.gender = 'Vui lòng chọn giới tính';
    if (!formData.agree) newErrors.agree = 'Bạn phải đồng ý điều khoản';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Xóa lỗi khi người dùng sửa
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(true);

    if (validateForm()) {
      console.log('Submitted:', formData);
      setSubmitted(true);
      setValidated(false); // reset validation sau submit thành công
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-md-center">
        <Col md={7} lg={6}>
          <h2 className="text-center mb-4 fw-bold">Đăng Ký Tài Khoản</h2>

          {submitted && (
            <Alert variant="success" dismissible onClose={() => setSubmitted(false)}>
              Đăng ký thành công! Chúng tôi đã nhận thông tin của bạn.
            </Alert>
          )}

          <form noValidate onSubmit={handleSubmit}>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Thông tin cá nhân</Accordion.Header>
                <Accordion.Body>
                  <PersonalInfo 
                    formData={formData} 
                    onChange={handleChange} 
                    errors={errors} 
                    validated={validated} 
                  />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Thông tin tài khoản</Accordion.Header>
                <Accordion.Body>
                  <AccountInfo 
                    formData={formData} 
                    onChange={handleChange} 
                    errors={errors} 
                    validated={validated} 
                  />
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Tùy chọn & Đồng ý</Accordion.Header>
                <Accordion.Body>
                  <Preferences 
                    formData={formData} 
                    onChange={handleChange} 
                    errors={errors} 
                    validated={validated} 
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="d-grid mt-4">
              <Button 
                variant="primary" 
                size="lg" 
                type="submit" 
                disabled={submitted}
              >
                {submitted ? 'Đang xử lý...' : 'Hoàn tất đăng ký'}
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegistrationForm;