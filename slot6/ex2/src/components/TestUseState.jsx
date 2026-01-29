import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import "./TestUseState.css";

function TestUseState() {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [label, setLabel] = useState("");

  const handleChange = () => {
    setLabel(`👋 Hi, my name is ${userName} and I am ${age} years old.`);
  };

  return (
    <div className="useState-page">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="useState-card">
          <Card.Body>
            {/* Title */}
            <h2 className="useState-title">Test UseState Form</h2>
            <p className="useState-subtitle">
              Enter your info and update the label instantly.
            </p>

            {/* Form */}
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="useState-label">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. John Doe"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="useState-input"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="useState-label">Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="e.g. 25"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="useState-input"
                />
              </Form.Group>

              {/* Button */}
              <Button
                className="useState-btn"
                onClick={handleChange}
                disabled={!userName || !age}
              >
                Change Label ✨
              </Button>
            </Form>

            {/* Output */}
            {label && (
              <Alert className="useState-alert mt-4">
                {label}
              </Alert>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default TestUseState;
