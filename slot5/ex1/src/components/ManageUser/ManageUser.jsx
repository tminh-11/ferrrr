// src/components/ManageUser/ManageUser.jsx
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import HeaderNavbar from "./HeaderNavbar";
import Sidebar from "./Sidebar";
import UserTable from "./UserTable";
import PaginationFooter from "./PaginationFooter";
import SystemFooter from "./SystemFooter";

import  listOfUsers  from "../data/listOfUsers";

export default function ManageUser() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(listOfUsers); // state để cập nhật lock/unlock

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.uid.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggleLock = (uid) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.uid === uid
          ? { ...u, status: u.status === "SUSPENDED" ? "ACTIVE" : "SUSPENDED" }
          : u
      )
    );
  };

  const handlePurge = (uid) => {
    if (window.confirm("Bạn chắc chắn muốn PURGE user này?")) {
      setUsers((prev) => prev.filter((u) => u.uid !== uid));
    }
  };

  return (
    <Container fluid className="p-0 min-vh-100 d-flex flex-column">
      <HeaderNavbar search={search} setSearch={setSearch} />

      <Row className="g-0 flex-grow-1">
        <Col md={2} className="border-end bg-light">
          <Sidebar />
        </Col>

        <Col md={10} className="d-flex flex-column">
          <div className="p-3 flex-grow-1">
            <UserTable
              filteredUsers={filteredUsers}
              onToggleLock={handleToggleLock}
              onPurge={handlePurge}
            />
            <PaginationFooter total={users.length} filtered={filteredUsers.length} />
          </div>

          <SystemFooter />
        </Col>
      </Row>
    </Container>
  );
}