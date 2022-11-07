import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactImageGallery from "react-image-gallery";
import "./AddDetails.css";
export default function AddDetails({ data }) {
  let images = [];
  const imgData = data.images;

  if (imgData) {
    imgData.forEach((img) => {
      images.push({
        original: img.url,
        thumbnail: img.url,
      });
    });
  }
  return (
    <div className="add-details">
      <Row>
        <Col>
          <ReactImageGallery items={images} />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h3 className="text-primary">
            Tk {data.price}
            <span
              className="text-secondary fst-italic"
              style={{ fontSize: "15px" }}
            >
              {data.price_type}
            </span>
          </h3>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p className="lead">
            <span className="fw-bolder">Conditon</span> : {data.condition}
          </p>
          <p className="lead">
            <span className="fw-bolder">Brand</span> :{" "}
            {data.brand === "" ? "Not Mentioned" : data.brand}
          </p>
          <p className="lead">
            <span className="fw-bolder">Model</span> :{" "}
            {data.model === "" ? "Not Mentioned" : data.model}
          </p>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <h5>Description:</h5>
          <p className="lead">
            {data.description === "" ? "Not Mentioned" : data.description}
          </p>
        </Col>
      </Row>
    </div>
  );
}
