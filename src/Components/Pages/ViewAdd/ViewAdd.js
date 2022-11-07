import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";
import AddDetails from "./AddDetails/AddDetails";
import ContactDetails from "./ContactDetails/ContactDetails";
import "./ViewAdd.css";
export default function ViewAdd() {
  const [load, setLoad] = React.useState(false);
  //getting id from url
  const { id } = useParams();
  console.log(id);
  const { setLoading } = useUserAuth();

  //fetching data from api heroku
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setLoad(true);
    setLoading(true);
    fetch(`https://jankenbou.herokuapp.com/product/singleproduct/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setData(data.data);
        setLoad(false);
      });
  }, [id, setLoading]);

  if (load) {
    return <div>Loading...</div>;
  }
  return (
    <div className="section py-5">
      <Container>
        <div className="addvertise-container p-3 bg-light mx-auto shadow rounded">
          <Row>
            <Col>
              <h3>{data.name}</h3>
              <p className="text-secondary">
                Posted on {data && data.createdAt}, {data && data.location}
              </p>
            </Col>
          </Row>
          <Row className="gx-4">
            <Col md={8}>
              <AddDetails data={data} />
            </Col>
            <Col md={4}>
              <ContactDetails data={data} />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
