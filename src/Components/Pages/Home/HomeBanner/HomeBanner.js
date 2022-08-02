import React from "react";
import AnimatedText from "react-animated-text-content";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import bannerImg from "../../../../utilities/images/jankenhome.png";
import "./HomeBanner.css";
const HomeBanner = () => {
  const slogans = [
    "Discover something new.",
    "Find it, love it, and buy it.",
    "Sell your old things. Buy new things.",
    "Whatever you’ve got in mind, we’ve got inside.    ",
  ];
  return (
    <div>
      <Row>
        <Col md={4}>
          <Container fluid="md">
            <div className="banner ">
              <h1 className="banner-header">
                <AnimatedText
                  type="chars" // animate words or chars
                  animation={{
                    x: "200px",
                    y: "-20px",
                    scale: 1.1,
                    ease: "ease-in-out",
                  }}
                  animationType="float"
                  interval={0.06}
                  duration={0.8}
                  tag="p"
                  className="animated-paragraph"
                  includeWhiteSpaces
                  threshold={0.1}
                  rootMargin="20%"
                >
                  JANKENBOU
                </AnimatedText>
              </h1>
              <div className="text-dark text-left lead">
                {slogans.map((slogan, index) => {
                  return (
                    <AnimatedText
                      key={index}
                      type="chars" // animate words or chars
                      animation={{
                        x: "200px",
                        y: "-20px",
                        scale: 1.1,
                        ease: "ease-in-out",
                      }}
                      animationType="float"
                      interval={0.06}
                      duration={0.8}
                      tag="p"
                      className="animated-paragraph"
                      includeWhiteSpaces
                      threshold={0.1}
                      rootMargin="20%"
                    >
                      {slogan}
                    </AnimatedText>
                  );
                })}
              </div>
              <Button size="lg" variant="primary" className="mt-2 bg_blue">
                <Link to="/signup" className="text-light text-decoration-none">
                  Sign Up
                </Link>
              </Button>
            </div>
          </Container>
        </Col>
        <Col md={8}>
          <div className="banner-image p-5 pt-0">
            <img src={bannerImg} width="100%" alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeBanner;
