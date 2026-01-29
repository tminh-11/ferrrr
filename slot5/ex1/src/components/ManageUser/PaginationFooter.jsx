// PaginationFooter.jsx
import { Button } from 'react-bootstrap';
export default function PaginationFooter({ total, filtered }) {
  return (
    <div className="d-flex justify-content-between align-items-center small mt-3">
      <div className="fw-bold">
        RECORDS: 001–{String(filtered).padStart(3, "0")} / TOTAL: {String(total).padStart(3, "0")}
      </div>
      <div>
        <Button size="sm" variant="outline-dark" className="me-1">
          &lt;
        </Button>
        <Button size="sm" variant="dark" className="me-1">
          1
        </Button>
        <Button size="sm" variant="outline-dark" className="me-1">
          2
        </Button>
        <Button size="sm" variant="outline-dark">
          &gt;
        </Button>
      </div>
    </div>
  );
}