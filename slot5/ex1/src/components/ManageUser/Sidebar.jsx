// src/components/ManageUser/Sidebar.jsx
import { Nav, Button } from "react-bootstrap";

export default function Sidebar() {
  return (
    <div className="p-3">
      <Nav className="flex-column fw-bold small">
        <Nav.Link>01 DASHBOARD</Nav.Link>
        <Nav.Link active>02 USERS LIST</Nav.Link>
        <Nav.Link>03 ACCESS NODES</Nav.Link>
        <Nav.Link>04 PERM MATRIX</Nav.Link>
        <Nav.Link>05 RAW LOGS</Nav.Link>
      </Nav>

      <div className="mt-5 small">
        <div>OPERATOR: A_SMITH</div>
        <div>LVL: SUPER_ADMIN</div>
        <Button variant="outline-dark" size="sm" className="mt-3 w-100">
          TERMINATE SESSION
        </Button>
      </div>
    </div>
  );
}