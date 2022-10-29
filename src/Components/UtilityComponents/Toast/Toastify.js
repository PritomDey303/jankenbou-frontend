import React from "react";
import ToastContainer from "react-bootstrap/esm/ToastContainer";
import Toast from "react-bootstrap/Toast";
import "./Toastify.css";
export default function Toastify(props) {
  const { show, setShow, bg, message } = props;

  const handleClose = () => setShow(false);
  //automatically hide toast after 3 seconds
  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, [show, setShow]);

  return (
    <ToastContainer className="mt-3 me-2" position="top-end">
      <Toast show={show} bg={bg} className="">
        <Toast.Body className=" pb-0 d-flex justify-content-between align-items-center">
          <p className="fw-bold text-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>{" "}
            <span className="ms-1">{message}</span>
          </p>
          <p
            className="text-light"
            style={{
              cursor: "pointer",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
            onClick={handleClose}
          >
            X
          </p>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
