import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <h1 className="text-center fw-bold text-danger mb-5">
          Contact Pizza House 📞
        </h1>

        <Row className="g-5">
          {/* Contact Info + Social */}
          <Col lg={5}>
            <Card className="bg-dark-subtle border-0 shadow-lg h-100 text-dark">
              <Card.Body className="d-flex flex-column p-4">
                <h3 className="text-danger mb-4">Get in Touch</h3>

                <div className="mb-4 fs-5">
                  <p className="d-flex align-items-center gap-3 mb-3">
                    📍 123 Pizza Street, Hoan Kiem District, Hanoi
                  </p>
                  <p className="d-flex align-items-center gap-3 mb-3">
                    📱 +84 123 456 789
                  </p>
                  <p className="d-flex align-items-center gap-3 mb-3">
                    ✉️ support@pizzahouse.com
                  </p>
                  <p className="d-flex align-items-center gap-3 mb-3">
                    🕒 Open: 10:00 AM - 10:00 PM daily
                  </p>
                </div>

                <div className="mt-auto">
                  <h5 className="text-danger mb-3">Follow Us</h5>
                  <div className="d-flex gap-4 fs-4">
                    <a
                      href="https://facebook.com/pizzahouse" // ← update to your real FB page
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-danger text-decoration-none hover-underline"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://instagram.com/pizzahouse.vn" // ← update to your real IG
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-danger text-decoration-none hover-underline"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://zalo.me/123456789" // ← update to your Zalo OA
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-danger text-decoration-none hover-underline"
                    >
                      Zalo
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Form + Map */}
          <Col lg={7}>
            <Card className="bg-dark border-0 shadow-lg">
              <Card.Body className="p-4">
                <h3 className="text-danger mb-4">Send Us a Message</h3>

                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label className="text-white">Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="e.g., Nguyen Van A"
                      required
                      className="bg-dark-subtle border-0 text-white"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example@email.com"
                      required
                      className="bg-dark-subtle border-0 text-white"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label className="text-white">Phone (optional)</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="0123 456 789"
                      className="bg-dark-subtle border-0 text-white"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label className="text-white">Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Questions about pizza, reservations, or feedback?"
                      required
                      className="bg-dark-subtle border-0 text-white"
                    />
                  </Form.Group>

                  <Button
                    variant="danger"
                    size="lg"
                    className="rounded-pill px-5 w-100"
                    type="submit"
                  >
                    Send Message 🔥
                  </Button>
                </Form>

                <div className="mt-5">
                  <h5 className="text-danger mb-3">Find Us on the Map</h5>
                  <div className="ratio ratio-16x9 rounded overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9!2d105.834!3d21.027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab!2zSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1730000000000" // ← replace with your real location embed
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Pizza House Location"
                    ></iframe>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}