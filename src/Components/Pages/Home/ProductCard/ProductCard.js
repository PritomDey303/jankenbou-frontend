import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SingleCard from "./SingCard/SingleCard";

export default function ProductCard() {
  const [products, setProducts] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <>
      <div className="product-card ">
        <Container>
          <Row className="g-5">
            {products.map((product, index) => (
              <SingleCard key={index} />
            ))}
          </Row>
          <Row>
            <Col>
              <Button
                variant="primary"
                size="lg"
                className="bg_blue d-block mx-auto mt-5 shadow"
              >
                Load More
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
