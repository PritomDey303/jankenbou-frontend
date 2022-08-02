import React from "react";
import { Col, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import signUpImage from "../../../utilities/images/signup-image.jpg";
import "./SignUp.css";
const SignUp = () => {
  //input field arr
  const signUpField = [
    {
      id: 1,
      fieldName: "name",
      fieldType: "text",
      placeHolder: "Your Name",
      d: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    },
    {
      id: 2,
      fieldName: "email",
      fieldType: "email",
      placeHolder: "Your Email",
      d: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z",
    },
    {
      id: 3,
      fieldName: "password",
      fieldType: "password",
      placeHolder: "Password",
      d: "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z",
    },
    {
      id: 4,
      fieldName: "confirm_password",
      fieldType: "password",
      placeHolder: "Repeat your password",
      d: "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z",
    },
  ];
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-100 section h-100 py-5">
      <div className="form-container">
        <Row>
          <Col md={6} className="signup-container ">
            <h1 className="mb-5 signup-header">Sign Up</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              {signUpField.map((i) => (
                <InputGroup key={i.id} className="mb-3 input-container">
                  <InputGroup.Text className="input-icon" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d={i.d} />
                    </svg>
                  </InputGroup.Text>
                  <Form.Control
                    className="input"
                    placeholder={i.placeHolder}
                    aria-label={i.fieldName}
                    aria-describedby="basic-addon1"
                    {...register(i.fieldName, { required: true })}
                  />
                </InputGroup>
              ))}
              <Button
                className="bg_blue text-light px-5 py-3 mt-5 submit-btn"
                type="submit"
              >
                REGISTER
              </Button>
            </Form>
          </Col>
          <Col md={6} className="signup-image-container ">
            <div className="signup-image">
              <img src={signUpImage} alt="signup" width="100%" height="auto" />
            </div>
            <p className="lead text-center mt-5 text-dark">
              <Link className="text-dark" to="/signin">
                Already have an account? Sign in..
              </Link>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignUp;
