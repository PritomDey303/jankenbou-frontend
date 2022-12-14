import React, { useContext } from "react";
import { Col, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastProvider } from "../../../App";
import { useUserAuth } from "../../../context/UserAuthContext";
import SigninImage from "../../../utilities/images/signin-image.jpg";
import "./SignIn.css";
const SignIn = () => {
  const navigate = useNavigate();
  const { user, signIn, setLoading } = useUserAuth();
  React.useEffect(() => {
    if (!!user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const { handleToastify } = useContext(ToastProvider);
  //input field arr
  const SigninField = [
    {
      id: 1,
      fieldName: "email",
      fieldType: "email",
      placeHolder: "Your Email",
      d: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z",
    },
    {
      id: 2,
      fieldName: "password",
      fieldType: "password",
      placeHolder: "Password",
      d: "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z",
    },
  ];
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const user = await signIn(data.email, data.password);
      if (user) {
        handleToastify("Successfully Signed In.", "success");
        console.log(user.user.accessToken);
        localStorage.setItem("jankenbou_token", user.user.accessToken);
        navigate("/", { replace: true });
      }
    } catch (err) {
      handleToastify(err.message, "danger");
    }
    setLoading(false);
  };

  return (
    <div className="w-100 section h-100 py-5">
      <div className="form-container">
        <Row>
          <Col md={{ span: 6, order: 2 }} className="Signin-container ">
            <h1 className="mb-5 Signin-header">Sign In</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              {SigninField.map((i) => (
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
                    type={i.fieldType}
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
                SIGN IN
              </Button>
            </Form>
          </Col>
          <Col md={{ span: 6, order: 1 }} className="Signin-image-container ">
            <div className="Signin-image">
              <img src={SigninImage} alt="Signin" width="100%" height="auto" />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
            <p className="lead mt-3 signin-text  text-dark">
              <Link className="text-dark" to="/signup">
                Don't have an account? Sign Up..
              </Link>
            </p>
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
            <p className="text-dark mt-3  signin-text lead">
              Or Sign In with{"   "}{" "}
              <Button variant="danger ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </Button>
              <Button
                variant="primary"
                style={{ backgroundColor: "blue" }}
                className="ms-2 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </Button>
              <Button variant="dark" className="ms-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Button>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SignIn;
