// src/components/ManageUser/HeaderNavbar.jsx
import { Navbar, Form, Button } from "react-bootstrap";

export default function HeaderNavbar({ search, setSearch }) {
  return (
    <Navbar bg="light" className="border-bottom">
      <div className="container-fluid">
        <Navbar.Brand className="fw-bold">SEC_ADMIN</Navbar.Brand>

        <Form className="d-flex w-50 mx-auto">
          <Form.Control
            size="sm"
            type="text"
            placeholder="UID / EMAIL / HASH / IP..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>

        <div className="d-flex gap-2">
          <Button variant="outline-dark" size="sm">
            NOTIFY [0]
          </Button>
          <Button variant="dark" size="sm">
            ADD NEW USER +
          </Button>
        </div>
      </div>
    </Navbar>
  );
}