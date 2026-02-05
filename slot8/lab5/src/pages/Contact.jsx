// Contact.jsx
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="py-5">
      <h1>Contact Us</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}
export default Contact;