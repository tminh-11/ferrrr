import { useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Modal,} from "react-bootstrap";
import menuList from "../data/menuList";

export default function Menu() {
  const [show, setShow] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleViewDetails = (pizza) => {
    setSelectedPizza(pizza);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedPizza(null);
  };

  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <h2 className="text-center fw-bold mb-5">Our Menu</h2>

        <Row className="g-4">
          {menuList.map((item) => (
            <Col md={3} sm={6} key={item.id}>
              <Card
                className="h-100 text-center border-0 shadow-sm"
                style={{
                  backgroundColor: "#fffefe",
                  borderRadius: "16px",
                }}
              >
                {item.tag && (
                  <Badge bg={item.tagVariant} className="position-absolute m-2">
                    {item.tag}
                  </Badge>
                )}

                <Card.Img
                  src={item.img}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                  }}
                />

                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-dark">
                    {item.name}
                  </Card.Title>

                  <div className="mb-3">
                    {item.oldPrice && (
                      <span className="text-muted me-2">
                        <del>${item.oldPrice}.00</del>
                      </span>
                    )}
                    <span className="text-danger fw-bold">
                      ${item.price}.00
                    </span>
                  </div>

                  <div className="d-flex gap-2 mt-auto">
                    <Button
                      variant="outline-danger"
                      className="rounded-pill fw-bold w-100"
                      onClick={() => handleViewDetails(item)}
                    >
                      View Details
                    </Button>

                    <Button
                      variant="danger"
                      className="rounded-pill fw-bold w-100"
                      onClick={() => alert(`Added ${item.name} to cart!`)}
                    >
                      Buy
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ===== Modal ===== */}
        <Modal show={show} onHide={handleClose} centered>
          {selectedPizza && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{selectedPizza.name}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <img
                  src={selectedPizza.img}
                  alt={selectedPizza.name}
                  className="img-fluid rounded mb-3"
                />

                <p>
                  <strong>Price:</strong>{" "}
                  <span className="text-danger fw-bold">
                    ${selectedPizza.price}.00
                  </span>
                </p>

                {selectedPizza.oldPrice && (
                  <p>
                    <strong>Old Price:</strong>{" "}
                    <del>${selectedPizza.oldPrice}.00</del>
                  </p>
                )}

                {selectedPizza.tag && (
                  <p>
                    <strong>Tag:</strong>{" "}
                    <Badge bg={selectedPizza.tagVariant}>
                      {selectedPizza.tag}
                    </Badge>
                  </p>
                )}

                <p className="text-muted">{selectedPizza.description}</p>
              </Modal.Body>

              <Modal.Footer>
                <Button
                  variant="secondary"
                  className="rounded-pill"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  variant="danger"
                  className="rounded-pill fw-bold"
                  onClick={() => alert(`Added ${selectedPizza.name} to cart!`)}
                >
                  Buy Now
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </Container>
    </section>
  );
}
