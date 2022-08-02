import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import AddDetails from "./AddDetails/AddDetails";
import ContactDetails from "./ContactDetails/ContactDetails";
import "./ViewAdd.css";
export default function ViewAdd() {
  return (
    <div className="section py-5">
      <Container>
        <div className="addvertise-container p-3 bg-light mx-auto shadow rounded">
          <Row>
            <Col>
              <h3>Xiaomi Redmi Note 9 Pro mobile</h3>
              <p className="text-secondary">
                Posted on 28 Jul 6:53 pm, Mirpur, Dhaka
              </p>
            </Col>
          </Row>
          <Row className="gx-4">
            <Col md={8}>
              <AddDetails />
            </Col>
            <Col md={4}>
              <ContactDetails />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
