import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

export default function Hero() {
    return (
        <Carousel fade interval={4000}>
            {/* Slide 1 */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/hero-pizza.webp"
                    alt="Neapolitan Pizza"
                    style={{ height: "500px", objectFit: "cover" }}
                />

                <Carousel.Caption className="bg-dark bg-opacity-50 rounded-3 p-3">
                    <h3 className="fw-bold mb-1">Neapolitan Pizza</h3>
                    <p className="mb-2 small">Authentic Italian tradition, fresh from the oven.</p>
                    <Button variant="danger" className="rounded-pill px-4">
                        Order Now
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/hero-pizza2.jpg"
                    alt="Cheese Lovers"
                    style={{ height: "500px", objectFit: "cover" }}
                />

                <Carousel.Caption className="bg-dark bg-opacity-50 rounded-3 p-3">
                    <h3 className="fw-bold mb-1">Cheese Lovers</h3>
                    <p className="mb-2 small">Melted cheese perfection for every slice.</p>
                    <Button variant="warning" className="rounded-pill px-4 fw-bold">
                        Order Now
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/hero-pizza3.webp"
                    alt="Family Combo"
                    style={{ height: "500px", objectFit: "cover" }}
                />

                <Carousel.Caption className="bg-dark bg-opacity-50 rounded-3 p-3">
                    <h3 className="fw-bold mb-1">Family Combo</h3>
                    <p className="mb-2 small">Sharing happiness with every slice.</p>
                    <Button variant="success" className="rounded-pill px-4">
                        Order Now
                    </Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
