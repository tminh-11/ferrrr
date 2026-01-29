// src/components/ManageUser/UserTable.jsx
import { Table, Button, Badge, Image } from "react-bootstrap";

export default function UserTable({ filteredUsers, onToggleLock, onPurge }) {
  return (
    <Table bordered hover responsive size="sm" className="mb-4">
      <thead className="table-dark">
        <tr>
          <th>UID</th>
          <th>IDENTITY DATA</th>
          <th>STATUS</th>
          <th>PWD_HASH_SHA256</th>
          <th className="text-end">EXEC COMMANDS</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center text-muted py-4">
              No users found
            </td>
          </tr>
        ) : (
          filteredUsers.map((u) => (
            <tr key={u.uid}>
              <td className="fw-bold align-middle">{u.uid}</td>

              <td className="align-middle">
                <div className="d-flex align-items-center gap-3">
                  <Image
                    src={u.avatar}
                    roundedCircle
                    width={48}
                    height={48}
                    alt={u.name}
                    style={{ objectFit: "cover" }} // bỏ grayscale nếu muốn màu
                  />
                  <div>
                    <div className="fw-bold">{u.name}</div>
                    <div className="small text-muted">{u.email}</div>
                  </div>
                </div>
              </td>

              <td className="align-middle">
                <Badge
                  bg={
                    u.status === "ACTIVE"
                      ? "success"
                      : u.status === "SUSPENDED"
                      ? "danger"
                      : "warning"
                  }
                >
                  {u.status}
                </Badge>
              </td>

              <td className="small text-break align-middle">{u.hash.substring(0, 16)}...</td>

              <td className="text-end align-middle">
                <Button variant="outline-dark" size="sm" className="me-1">
                  EDIT
                </Button>

                <Button
                  variant={u.status === "SUSPENDED" ? "success" : "outline-danger"}
                  size="sm"
                  className="me-1"
                  onClick={() => onToggleLock(u.uid)}
                >
                  {u.status === "SUSPENDED" ? "UNLOCK" : "LOCK"}
                </Button>

                <Button variant="outline-danger" size="sm" onClick={() => onPurge(u.uid)}>
                  PURGE
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}