import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleCard.css";
export default function SingleCard({ post }) {
  return (
    <Col md={4}>
      <Card className="px-2 shadow">
        <div className="card-img-container" style={{ height: "150px" }}>
          <Card.Img
            variant="top"
            className="w-100  p-2 rounded"
            style={{
              height: "130px",
              objectFit: "cover",
              objectPosition: " center",
            }}
            src={post.images[0].url}
          />
        </div>

        <Card.Body>
          <Card.Title>{post && post.name}</Card.Title>
          <Card.Text>{post && post.description.slice(0, 100)}.....</Card.Text>
          <div className="button-group d-flex align-items-center justify-content-between">
            <p className="lead font-weight-bold">
              Price: {post && post.price} Bdt
            </p>
            <Link to={`addvertise/${post._id}`}>
              <Button variant="primary" className="bg_blue">
                View Details
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
