// src/pages/About.jsx
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function About() {
  return (
    <Container fluid className="py-5 bg-gradient-soft">
      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          {/* Hero section nhẹ nhàng */}
          <div className="text-center mb-5 pb-4">
            <h1 className="display-4 fw-bold mb-3 text-primary-soft">
              Về Pizza Order App
            </h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '720px' }}>
              Một ứng dụng đặt pizza đơn giản nhưng đầy đủ chức năng, được xây dựng với 
              <span className="fw-semibold text-primary-soft"> React </span> 
              trong khuôn khổ môn học Lập trình Front-end.
            </p>
            <div className="divider-soft mx-auto mt-4"></div>
          </div>

          {/* Nội dung chính - sử dụng card nhẹ */}
          <Card className="border-0 shadow-soft overflow-hidden">
            <Card.Body className="p-5 p-lg-5">
              <Row className="g-5">
                {/* Cột trái - Giới thiệu ngắn */}
                <Col lg={6}>
                  <h3 className="h4 fw-semibold mb-4 text-primary-soft">
                    Chúng tôi là ai?
                  </h3>
                  <p className="text-muted lh-lg mb-4">
                    Đây không chỉ là một bài tập React thông thường. 
                    Đây là nỗ lực của một sinh viên đam mê lập trình web, 
                    mong muốn tạo ra một trải nghiệm đặt món ăn trực tuyến 
                    đơn giản, mượt mà và thân thiện với người dùng.
                  </p>
                  <p className="text-muted lh-lg">
                    Dự án được thiết kế với triết lý: 
                    <span className="fst-italic text-dark">“Đơn giản nhưng tinh tế”</span>.
                  </p>
                </Col>

                {/* Cột phải - Công nghệ & Đặc điểm */}
                <Col lg={6}>
                  <h3 className="h4 fw-semibold mb-4 text-primary-soft">
                    Công nghệ & Đặc điểm nổi bật
                  </h3>
                  
                  <ListGroup variant="flush" className="bg-transparent">
                    <ListGroup.Item className="px-0 py-3 border-bottom">
                      <strong>React Router v6</strong> — Điều hướng mượt mà, không reload trang
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 py-3 border-bottom">
                      <strong>React Bootstrap</strong> — Giao diện responsive, đẹp mắt mà nhẹ
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 py-3 border-bottom">
                      <strong>useReducer</strong> — Quản lý trạng thái quiz thông minh, dễ mở rộng
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 py-3 border-bottom">
                      <strong>Carousel động</strong> — Banner quảng cáo chuyên nghiệp, thu hút
                    </ListGroup.Item>
                    <ListGroup.Item className="px-0 py-3">
                      <strong>CSS Variables + Dark mode auto</strong> — Theme nhất quán, dễ chịu mắt
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Phần kết nhẹ nhàng */}
          <div className="text-center mt-5 pt-4">
            <p className="text-muted small">
              Dự án được hoàn thành vào tháng 2/2026<br />
              <span className="text-primary-soft fw-medium">Trân trọng cảm ơn giảng viên và các bạn đã theo dõi!</span>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;