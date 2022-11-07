import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useUserAuth } from "../../../../../context/UserAuthContext";
import productType from "../../../../../utilities/productType";
import "./FilterBox.css";
export default function FilterBox({ setPosts }) {
  const { setLoading } = useUserAuth();
  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [condition, setCondition] = React.useState("");

  //get all post
  React.useEffect(() => {
    setLoading(true);
    fetch("https://jankenbou.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data.data);
        setLoading(false);
      });
  }, [setLoading, setPosts]);
  //get all filtered posts
  const getFilteredPosts = () => {
    setLoading(true);
    fetch(
      `https://jankenbou.herokuapp.com/product/filter?name=${name}&category=${category}&condition=${condition}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
        setLoading(false);
      });
  };
  //get all posts

  return (
    <div className="py-5">
      <div className="filterbox-container shadow">
        <Form className="py-5 px-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Type Keywords"
              size="lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray"
            />
          </Form.Group>
          <Row className="mt-4">
            <Col md={6}>
              <Form.Select
                size="lg"
                className="bg-gray"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ color: "gray" }}
                aria-label="Default select example"
              >
                <option value="">Select Category</option>
                {productType.map((type) => (
                  <option key={type.id} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Select
                size="lg"
                style={{ color: "gray" }}
                className="bg-gray"
                aria-label="Default select example"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              >
                <option value="">Select Condition</option>
                <option value="New">New</option>
                <option value="Old">Old</option>
              </Form.Select>
            </Col>
          </Row>
          <Button
            onClick={getFilteredPosts}
            variant="primary"
            className="bg_blue d-block mx-auto mt-4 w-100"
          >
            Search
          </Button>
        </Form>
      </div>
    </div>
  );
}
