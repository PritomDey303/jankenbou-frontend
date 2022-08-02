import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PostAdd.css";
export default function PostAdd() {
  return (
    <div className="section py-5">
      <Container>
        <div
          className="post-add-container bg-light ps-4 py-4 shadow"
          style={{ height: "50vh" }}
        >
          <Row>
            <Col>
              <h3 className="text-center">Post Your Addervtise Here</h3>
              <div
                className=" mx-auto mt-4 bg-primary"
                style={{ height: "2px", width: "40%" }}
              ></div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
