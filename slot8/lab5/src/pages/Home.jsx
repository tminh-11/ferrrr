// src/pages/Home.jsx
import React from 'react';
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';


function Home() {
  return (
    <div>
      {/* SlideBar ở đầu trang */}


      {/* Thông tin tác giả */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="shadow-lg border-0">
              <Card.Header className="bg-danger text-white text-center py-4">
                <h2 className="mb-0">Pizza Order Application</h2>
              </Card.Header>
              
              <Card.Body className="p-5">
                <h4 className="mb-4 text-center text-danger">1. Thông tin tác giả</h4>
                
                <ListGroup variant="flush" className="mb-5">
                  <ListGroup.Item>
                    <strong>Mã sinh viên:</strong> 054
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Họ và tên:</strong> Nguyen Ha
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>GitHub:</strong>{' '}
                    <a 
                      href="https://github.com/tminh-11/ferrrr.git" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      github.com/tminh-11/ferrrr
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Ngày hoàn thành:</strong> Tháng 2/2026
                  </ListGroup.Item>
                </ListGroup>

                <hr className="my-5" />

                <h4 className="mb-4 text-center text-danger">2. Cấu trúc Project</h4>
                <p className="lead text-center">
                  Ứng dụng được xây dựng theo mô hình LAB5 với:
                </p>
                <ul className="list-unstyled text-center">
                  <li>• React + React Router DOM v6</li>
                  <li>• React-Bootstrap cho giao diện</li>
                  <li>• Carousel động cho banner quảng cáo</li>
                  <li>• Form đăng ký validation</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;