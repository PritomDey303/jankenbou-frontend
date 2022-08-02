import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./FilterBox.css";
export default function FilterBox() {
  return (
    <div className="py-5">
      <div className="filterbox-container shadow">
        <Form className="py-5 px-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Type Keywords"
              size="lg"
              className="bg-gray"
            />
          </Form.Group>
          <Row className="mt-4">
            <Col md={6}>
              <Form.Select
                size="lg"
                className="bg-gray"
                style={{ color: "gray" }}
                aria-label="Default select example"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Select
                size="lg"
                style={{ color: "gray" }}
                className="bg-gray"
                aria-label="Default select example"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <Button
            variant="primary"
            className="bg_blue d-block mx-auto mt-4 w-100"
          >
            Search
          </Button>
        </Form>
      </div>
    </div>
  );
}
