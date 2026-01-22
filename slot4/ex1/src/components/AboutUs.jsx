import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";

export default function AboutUs() {
  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <h1 className="text-center fw-bold text-danger mb-5">
          About Pizza House 🍕
        </h1>

        <Row className="align-items-center g-5 mb-5">
          <Col lg={6}>
            <Image
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80"
              alt="Pizza House kitchen team working in warm light"
              fluid
              rounded
              className="shadow-lg"
            />
          </Col>

          <Col lg={6}>
            <h2 className="text-danger mb-4">Our Story</h2>
            <p className="lead fw-medium text-white-75">
              Pizza House was born in 2018 in Hanoi, from a family's deep passion for pizza and the vibrant flavors of Vietnamese cuisine.
            </p>
            <p className="text-white-75">
              What started in a humble kitchen has grown into a beloved spot where we craft fresh, crispy-crust pizzas with house-made sauces and top-tier toppings — beautifully blending classic Italian techniques with familiar Vietnamese twists.
            </p>
            <p className="text-white-75">
              Every single pizza is hand-stretched and baked fresh daily because we truly believe the best meals are made with heart and care.
            </p>
          </Col>
        </Row>

        <Row className="text-center mb-5">
          <Col>
            <h3 className="text-danger mb-4">Our Core Values</h3>
            <ListGroup variant="flush" className="bg-transparent fs-5 border-0">
              <ListGroup.Item className="border-bottom border-secondary py-3 text-white-75">
                🌿 Fresh & Clean Ingredients – sourced daily from trusted local farms
              </ListGroup.Item>
              <ListGroup.Item className="border-bottom border-secondary py-3 text-white-75">
                🔥 Traditional Wood-Fired Oven – locking in authentic, smoky flavor
              </ListGroup.Item>
              <ListGroup.Item className="border-bottom border-secondary py-3 text-white-75">
                ❤️ Warm & Attentive Service – making every guest feel right at home
              </ListGroup.Item>
              <ListGroup.Item className="py-3 text-white-75">
                ♻️ Eco-Friendly Practices – recyclable packaging and minimal single-use plastic
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <h3 className="text-center text-danger mb-4">Meet Our Team</h3>
        <Row className="g-4 justify-content-center">
          <Col md={4} lg={3}>
            <Card className="bg-dark-subtle border-0 shadow-lg text-center h-100">
              <Card.Img
                variant="top"
                src="https://assets.bonappetit.com/photos/613a391e46535806a6463fd8/16:9/w_2000,h_1125,c_limit/Down%20North%20Pizza%20Lede%20Portrait.jpg"
                roundedCircle
                className="mx-auto mt-4 border border-danger border-3"
                style={{ width: "140px", height: "140px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-bold text-white">Chef Minh</Card.Title>
                <Card.Text className="text-muted">Head Chef & Pizza Master</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} lg={3}>
            <Card className="bg-dark-subtle border-0 shadow-lg text-center h-100">
              <Card.Img
                variant="top"
                src="http://fornopiombo.com/cdn/shop/articles/chef-pizza-oven.jpg?v=1648131085"
                roundedCircle
                className="mx-auto mt-4 border border-danger border-3"
                style={{ width: "140px", height: "140px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-bold text-white">Ms. Lan</Card.Title>
                <Card.Text className="text-muted">Manager & Flavor Creator</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}