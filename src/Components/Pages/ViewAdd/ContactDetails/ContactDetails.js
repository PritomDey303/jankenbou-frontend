import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ContactDetails.css";
export default function ContactDetails({ data }) {
  const safettips = [
    "Avoid offers that look unrealistic",
    "Chat with seller to clarify item details",
    "Meet in a safe & public place",
    "Check the item before buying it",
    "Don’t pay in advance",
  ];
  return (
    <div className="contact-details">
      <Row>
        <Col>
          <div className="seller-info  border rounded">
            <p className="lead  ps-3 py-3">
              For sale by <span className="fw-bolder">{data.seller_name}</span>
            </p>
            <hr />
            <p className="lead ps-3 py-2">
              <span className="text-light py-1 px-2 bg-success border rounded-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>{" "}
              <span className="text-secondary fw-normal">
                {data.seller_mobile}
              </span>
            </p>
            <hr />
            <p className="lead ps-3 py-2 ">
              <a
                href={data.seller_messenger}
                target="_blank"
                className="text-decoration-none text-dark"
                rel="noreferrer"
              >
                <span className="text-warning " style={{ fontSize: "20px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </span>{" "}
                <span className="fw-bold">Chat</span>
              </a>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="safety-tips-container border rounded mt-4 ps-2 py-3">
            <h5>
              <span className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
                  />
                </svg>
              </span>{" "}
              Safety Tips:
              <ul className="mt-3">
                {safettips.map((tip, index) => (
                  <li key={index}>
                    <p className="lead">{tip}</p>
                  </li>
                ))}
              </ul>
            </h5>
          </div>
        </Col>
      </Row>
    </div>
  );
}
