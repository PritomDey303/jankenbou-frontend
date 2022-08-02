import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./SingleCard.css";
export default function SingleCard() {
  return (
    <Col md={4}>
      <Card className="px-2 shadow">
        <div className="card-img-container" style={{ height: "30vh" }}>
          <Card.Img
            variant="top"
            className="w-100 h-100 p-2 rounded"
            src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010__340.jpg"
          />
        </div>

        <Card.Body>
          <Card.Title>Data Structure and Algorithm</Card.Title>
          <Card.Text>
            Some quick example text to build on t p-5he card title and make up
            the bulk of the card's content.....
          </Card.Text>
          <div className="button-group d-flex align-items-center justify-content-between">
            <p className="lead font-weight-bold">Price: 300 Bdt</p>
            <Button variant="primary" className="bg_blue">
              View Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
