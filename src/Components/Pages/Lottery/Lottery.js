import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Lottery() {
  //declare useState
  const [lottery, setLottery] = React.useState("");
  const [name, setName] = React.useState([]);
  const [rotation, setRotation] = React.useState(false);
  const [winner, setWinner] = React.useState("");
  //add lottery to name array and set lottery to empty string and useeEffect to update name array
  const addLottery = () => {
    setName([...name, lottery.trim()]);
    setLottery("");
  };
  React.useEffect(() => {
    console.log(name);
    console.log(winner);
  }, [name, winner]);
  //reset lottery and name array
  const resetLottery = () => {
    setLottery("");
    setName([]);
  };
  //
  const selectName = () => {
    setRotation(true);
    const random = Math.floor(Math.random() * name.length);

    setTimeout(() => {
      setWinner(name[random]);
      setRotation(false);
    }, 5000);
    setTimeout(() => {
      setWinner("");
      setName([]);
      setLottery("");
    }, 10000);
  };

  return (
    <div className="section py-5">
      {" "}
      <Container>
        <Row>
          <Col md={6} className="px-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter name"
              value={lottery}
              onChange={(e) => {
                setLottery(e.target.value);
              }}
            />
            {lottery.trim() !== "" ? (
              <button
                className="btn btn-primary btn-lg my-4 d-block mx-auto"
                onClick={addLottery}
              >
                Add Name
              </button>
            ) : (
              <button
                className="btn btn-primary btn-lg my-4 d-block mx-auto disabled"
                onClick={addLottery}
              >
                Add Name
              </button>
            )}
          </Col>
          <Col md={6}>
            <div className="name-container px-2">
              <h1 className="mb-3 ">
                All Participant's Name:{" "}
                {name.length > 0 && (
                  <button
                    className="btn btn-outline-danger my-4 mx-auto"
                    onClick={resetLottery}
                  >
                    Reset
                  </button>
                )}
              </h1>
              <ol
                type="i"
                className="lead text-secondary"
                style={{ fontSize: "25px" }}
              >
                {name.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ol>
            </div>
          </Col>
        </Row>{" "}
        {name.length > 0 && (
          <Row>
            <Col className="mt-4 pt-4">
              {!rotation ? (
                <button
                  className={`btn btn-danger btn-lg d-block mx-auto d-block`}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                  onClick={() => {
                    selectName();
                  }}
                >
                  Spin
                </button>
              ) : (
                <div
                  className="spinner-grow d-block mx-auto text-danger"
                  role="status"
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
              {winner && (
                <div>
                  <h3 className="text-center my-2 mt-4">THE WINNER IS</h3>
                  <h1 className="h1 text-center text-danger">{winner}</h1>
                </div>
              )}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
