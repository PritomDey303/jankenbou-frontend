import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleCard from "./SingCard/SingleCard";

export default function ProductCard({ posts }) {
  console.log(posts);
  return (
    <>
      <div className="product-card ">
        <Container>
          <Row className="g-5">
            {posts &&
              posts.map((post, index) => (
                <SingleCard key={index} post={post} />
              ))}
          </Row>
          <Row>
            <Col>
              {posts.length === 0 && (
                <div className="text-center">
                  <h3 className="text-secondary">No Product Found</h3>
                </div>
              )}
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <Button
                variant="primary"
                size="lg"
                className="bg_blue d-block mx-auto mt-5 shadow"
              >
                Load More
              </Button>
            </Col>
          </Row> */}
        </Container>
      </div>
    </>
  );
}
