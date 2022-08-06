import React from "react";
import { Spinner } from "react-bootstrap";
import { useUserAuth } from "../../../context/UserAuthContext";
import "./BackDrop.css";
export default function BackDrop() {
  const { loading } = useUserAuth();
  return (
    <>
      {loading ? (
        <div className="backdrop">
          <div className="spinner-container">
            <Spinner
              animation="border"
              role="status"
              variant="light"
              className="spinner"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </div>
      ) : null}
    </>
  );
}
