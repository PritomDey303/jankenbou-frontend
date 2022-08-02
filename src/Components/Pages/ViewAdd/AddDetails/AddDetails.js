import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactImageGallery from "react-image-gallery";
import "./AddDetails.css";
export default function AddDetails() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail:
        "https://i.picsum.photos/id/1018/1000/600.jpg?hmac=8y6PgnvgTLEEW-118lVn6V6zPUVSN9JSi27GSpmGpdQ",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/1000/600/",
    },
  ];
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
            Tk 13,000{" "}
            <span
              className="text-secondary fst-italic"
              style={{ fontSize: "15px" }}
            >
              Negotiable
            </span>
          </h3>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <p className="lead">
            <span className="fw-bolder">Conditon</span> : New
          </p>
          <p className="lead">
            <span className="fw-bolder">Brand</span> : Xiaomi
          </p>
          <p className="lead">
            <span className="fw-bolder">Model</span> : Redmi Note 9
          </p>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <h5>Description:</h5>
          <p className="lead">
            আমার নিজের ব্যবহার করা ফোন। ফোনে কোন সমস্যা নাই। টাকার জন্য ফোনটা
            বিক্রি করা হচ্ছে। আমার টাকার পয়োজন তাই বিক্রি করা লাগছে। ফোনের ক্যাশ
            মেমো আছে, ফোনের চার্জার ও আছে, এক কথায় ফোনের সাথে যা পেয়েছি সব আছে।
            ফোনের রেম-রোম 4-64,
          </p>
        </Col>
      </Row>
    </div>
  );
}
