import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Header() {
    return (
        <Navbar
            expand="lg"
            variant="dark"
            style={{
                background: "linear-gradient(90deg,#1f1f1f,#2c2c2c)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
            }}
        >
            <Container>
                {/* Logo */}
                <Navbar.Brand href="#" className="fw-bold fs-4 text-danger">
                    🍕 Pizza House
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Menu */}
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About Us</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>

                    {/* Search */}
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search pizza..."
                            className="me-2 rounded-pill"
                        />
                        <Button
                            variant="danger"
                            className="rounded-pill fw-bold px-4"
                        >
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
