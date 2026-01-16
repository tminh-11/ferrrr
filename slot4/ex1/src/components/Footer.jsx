import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
    return (
        <footer className="bg-dark text-light mt-5 pt-4 pb-3">
            <Container>
                <Row className="text-center text-md-start">
                    {/* Brand */}
                    <Col md={4} className="mb-3">
                        <h5 className="fw-bold">Pizza House</h5>
                        <p className="small mb-0">
                            Authentic Italian pizza made with fresh ingredients.
                        </p>
                    </Col>

                    {/* Links */}
                    <Col md={4} className="mb-3">
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className="list-unstyled small">
                            <li>Home</li>
                            <li>Menu</li>
                            <li>Order</li>
                            <li>Contact</li>
                        </ul>
                    </Col>

                    {/* Contact */}
                    <Col md={4} className="mb-3">
                        <h6 className="fw-bold">Contact</h6>
                        <p className="small mb-1">📍 123 Pizza Street</p>
                        <p className="small mb-1">📞 0123 456 789</p>
                        <p className="small mb-0">✉️ pizzahouse@email.com</p>
                    </Col>
                </Row>

                <hr className="border-secondary" />

                <p className="text-center small mb-0">
                    © 2026 Pizza House. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}
