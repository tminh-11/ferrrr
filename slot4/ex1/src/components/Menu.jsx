import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import menuList from "../data/menuList";

export default function Menu() {
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
                  <Badge
                    bg={item.tagVariant}
                    className="position-absolute m-2"
                  >
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
                  <Card.Title className="fw-bold">
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

                  <Button
                    variant="danger"
                    className="rounded-pill mt-auto fw-bold"
                  >
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
