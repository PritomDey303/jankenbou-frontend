import axios from "axios";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./PostAdd.css";
export default function PostAdd() {
  const { register, handleSubmit, resetField } = useForm();
  // const resetForm = () => {
  //   resetField("name");
  //   resetField("price");
  //   resetField("description");
  //   resetField("images");
  //   resetField("price_type");
  //   resetField("category");
  //   resetField("condition");
  //   resetField("brand");
  //   resetField("model");
  //   resetField("seller_name");
  //   resetField("seller_mobile");
  //   resetField("seller_messenger");
  //   resetField("location");
  // };
  const onSubmit = (data) => {
    console.log(data.images);

    const formData = new FormData();
    const imgData = Object.values(data.images);
    imgData.forEach((img) => {
      formData.append("images", img);
    });
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    // formData.append("images", data.images);
    formData.append("price_type", data.price_type);
    formData.append("category", data.category);
    formData.append("condition", data.condition);
    formData.append("brand", data.brand);
    formData.append("model", data.model);
    formData.append("seller_name", data.seller_name);
    formData.append("seller_mobile", data.seller_mobile);
    formData.append("seller_messenger", data.seller_messenger);
    formData.append("location", data.location);

    //axios post request with headers
    axios
      .post("https://jankenbou.herokuapp.com/product/create-post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `bearer ${localStorage.getItem("jankenbou_token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err + "error");
      });

    //resetForm();
  };
  return (
    <div className="section py-5">
      <Container>
        <div className="post-add-container bg-light px-4 py-4 shadow">
          <Row>
            <Col>
              <h3 className="text-center">Post Your Advertise Here</h3>
              <div
                className=" mx-auto mt-4 bg-primary"
                style={{ height: "2px", width: "40%" }}
              ></div>
            </Col>
          </Row>
          <Form className="px-4" onSubmit={handleSubmit(onSubmit)}>
            <Row className="mt-3 g-4">
              <Col xs={12}>
                <Form.Control
                  type="text"
                  size="lg"
                  {...register("name", { required: true })}
                  placeholder="Product Name"
                />
              </Col>
              <Col md={6}>
                {" "}
                <Form.Control
                  type="number"
                  size="lg"
                  {...register("price", { required: true })}
                  placeholder="Product Price(BDT)"
                />
              </Col>
              <Col md={6}>
                <Form.Select
                  size="lg"
                  {...register("price_type", { required: true })}
                  defaultValue=""
                >
                  <option value="">Price Type</option>
                  <option value="Fixed">Fixed</option>{" "}
                  <option value="Negotiable">Negotiable</option>
                </Form.Select>
              </Col>
              <Col xs={12}>
                <Form.Control
                  as="textarea"
                  {...register("description", { required: true })}
                  placeholder="Give product description"
                />
              </Col>
              <Col md={6}>
                <Form.Select
                  size="lg"
                  {...register("category", { required: true })}
                  defaultValue=""
                >
                  <option value="">Select Category</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Mobile">Mobile</option>
                </Form.Select>
              </Col>
              <Col md={6}>
                <Form.Select
                  size="lg"
                  {...register("condition", { required: true })}
                  defaultValue=""
                >
                  <option value="">Select Condition</option>
                  <option value="New">New</option>
                  <option value="Old">Old</option>
                </Form.Select>
              </Col>

              <Col xs={6}>
                <Form.Control
                  type="text"
                  size="lg"
                  {...register("brand")}
                  placeholder="Product Brand (optional)"
                />
              </Col>
              <Col xs={6}>
                <Form.Control
                  type="text"
                  size="lg"
                  {...register("model")}
                  placeholder="Product Model (optional)"
                />
              </Col>
              <Col xs={12}>
                <Form.Control
                  type="text"
                  size="lg"
                  {...register("seller_name", { required: true })}
                  placeholder="Seller Name"
                />
              </Col>
              <Col xs={6}>
                <Form.Control
                  type="text"
                  size="lg"
                  {...register("seller_mobile", { required: true })}
                  placeholder="Seller Mobile Number"
                />
              </Col>
              <Col xs={6}>
                <Form.Control
                  type="text"
                  size="lg"
                  {...register("seller_messenger", { required: true })}
                  placeholder="Seller Facebook Messenger Link"
                />
              </Col>

              <Col xs={12}>
                <Form.Control
                  type="text"
                  size="lg"
                  {...register("location", { required: true })}
                  placeholder="Seller Location"
                />
              </Col>
              <Col xs={12}>
                <Form.Control
                  {...register("images", { required: true })}
                  type="file"
                  size="lg"
                  multiple
                />
              </Col>
              <Col>
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="w-100 bg_blue"
                >
                  Post Advertise
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
}
