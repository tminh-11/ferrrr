import { useState } from "react";
import {Container, Row, Col, Form, Button, Dropdown, Card} from "react-bootstrap";

export default function Booking() {
    const [service, setService] = useState("Choose a service");

    return (
        <section
            className="py-5 text-white"
            style={{
                background: "linear-gradient(135deg, #343a40, #1a0000)",
            }}
        >
            <Container>
                {/* Title */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold display-6 text-danger">
                        Reserve Your Table
                    </h2>
                    <p className="text-light opacity-75">
                        Enjoy authentic flavors — book your spot now.
                    </p>
                </div>

                <Card
                    className="border-0 shadow-lg rounded-4"
                    style={{ backgroundColor: "rgba(3,14,34,0.9)" }}
                >
                    <Card.Body className="p-4 p-md-5">
                        <Form>
                            <Row className="g-4">
                                {/* Name */}
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label className="text-warning">
                                            Name
                                        </Form.Label>
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            placeholder="Enter your name"
                                            className="rounded-pill bg-dark text-white border-0"
                                        />
                                    </Form.Group>
                                </Col>

                                {/* Email */}
                                <Col md={4}>
                                    <Form.Group>
                                        <Form.Label className="text-warning">
                                            Email
                                        </Form.Label>
                                        <Form.Control
                                            size="lg"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="rounded-pill bg-dark text-white border-0"
                                        />
                                    </Form.Group>
                                </Col>

                                {/* Service */}
                                <Col md={4}>
                                    <Form.Label className="text-warning">
                                        Service
                                    </Form.Label>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            size="lg"
                                            className="w-100 rounded-pill fw-bold"
                                            variant="danger"
                                        >
                                            {service}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="w-100 bg-dark">
                                            {["Lunch", "Dinner", "Birthday Party"].map(
                                                (item) => (
                                                    <Dropdown.Item
                                                        key={item}
                                                        className="text-white"
                                                        onClick={() => setService(item)}
                                                    >
                                                        {item}
                                                    </Dropdown.Item>
                                                )
                                            )}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>

                                {/* Comment */}
                                <Col xs={12}>
                                    <Form.Group>
                                        <Form.Label className="text-warning">
                                            Comment
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            placeholder="Tell us any special requests"
                                            className="rounded-4 bg-dark text-white border-0"
                                        />
                                    </Form.Group>
                                </Col>

                                {/* Button */}
                                <Col xs={12} className="text-center">
                                    <Button
                                        size="lg"
                                        className="px-5 rounded-pill fw-bold shadow-sm"
                                        style={{
                                            backgroundColor: "#b30000",
                                            border: "none",
                                        }}
                                    >
                                        Book Now
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    );
}
