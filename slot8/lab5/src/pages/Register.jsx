import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert, Row, Col } from 'react-bootstrap';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
  });

  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // Giả lập gửi dữ liệu
      console.log('Đăng ký thành công:', formData);
      setSubmitted(true);
    }

    setValidated(true);
  };

  if (submitted) {
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Alert variant="success" className="text-center shadow">
              <h4>Đăng ký thành công!</h4>
              <p>Cảm ơn bạn đã đăng ký. Chúng tôi sẽ liên hệ sớm nhất.</p>
              <Button variant="outline-success" href="/">
                Quay về Trang chủ
              </Button>
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-primary text-white text-center py-4">
              <h3 className="mb-0">Đăng Ký Thành Viên</h3>
            </Card.Header>
            
            <Card.Body className="p-4 p-md-5">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label>Họ và tên <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Nhập họ và tên"
                  />
                  <Form.Control.Feedback type="invalid">
                    Vui lòng nhập họ và tên
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                  />
                  <Form.Control.Feedback type="invalid">
                    Vui lòng nhập email hợp lệ
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Số điện thoại</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0123 456 789"
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Mật khẩu <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        required
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                      />
                      <Form.Control.Feedback type="invalid">
                        Vui lòng nhập mật khẩu
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Xác nhận mật khẩu</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        isInvalid={formData.confirmPassword && formData.confirmPassword !== formData.password}
                      />
                      <Form.Control.Feedback type="invalid">
                        Mật khẩu không khớp
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Địa chỉ giao hàng</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Số nhà, đường, phường/xã, quận/huyện, thành phố"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    variant="danger" 
                    size="lg" 
                    type="submit"
                    className="py-3 fw-bold"
                  >
                    ĐĂNG KÝ NGAY
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;