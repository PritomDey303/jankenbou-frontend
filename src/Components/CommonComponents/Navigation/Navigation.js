import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
//navlink style
const activeStyle = {
  //backgroundColor: "white",
  color: "tomato",
  borderRadius: "5px",
  padding: "5px",
  margin: "5px",
  fontWeight: "bold",
  fontSize: "1em",
  textDecoration: "none",
  textTransform: "uppercase",
  letterSpacing: "1px",

  transition: "all 0.3s ease-in-out",
  WebkitTransition: "all 0.3s ease-in-out",
  MozTransition: "all 0.3s ease-in-out",
  OTransition: "all 0.3s ease-in-out",
  msTransition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "black",
    color: "black",
    borderRadius: "5px",
    padding: "5px",
    margin: "5px",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

const inactiveStyle = {
  color: "white",
  // backgroundColor: "transparent",
  borderRadius: "5px",
  padding: "5px",
  margin: "5px",
  fontWeight: "bold",
  fontSize: "1em",
  textDecoration: "none",
  textTransform: "uppercase",
  letterSpacing: "1px",

  transition: "all 0.3s ease-in-out",
  WebkitTransition: "all 0.3s ease-in-out",
  MozTransition: "all 0.3s ease-in-out",
  OTransition: "all 0.3s ease-in-out",
  msTransition: "all 0.3s ease-in-out",
};
const Navigation = () => {
  //navigation expand control
  const expand = "md";
  return (
    <>
      <Navbar
        fixed="top"
        key={expand}
        expand={expand}
        className="mb-3  bg_blue p-3 navbar"
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-light logo">
              JankenBou
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="text-light navbar-toggler"
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header
              className=" text-light"
              closeVariant="white"
              closeButton
              bsPrefix="offcanvas-head offcanvas-header"
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                JankenBou
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body bsPrefix="offcanvas-body offcanvas-custom-body">
              <Nav className="justify-content-end flex-grow-1 pe-5 me-4">
                <NavLink
                  to="/"
                  style={({ isActive }) =>
                    isActive ? activeStyle : inactiveStyle
                  }
                  className="mx-3"
                >
                  Home
                </NavLink>
                <NavDropdown
                  title="LOGIN"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                  className="nav-dropdown text-light mx-3"
                  style={{ color: "white" }}
                >
                  <Link to="/signin" className="text-decoration-none text-dark">
                    <span className="text-center d-block">Sign In</span>
                  </Link>
                  <NavDropdown.Divider />{" "}
                  <Link to="/signup" className="text-decoration-none text-dark">
                    <span className="text-center d-block">Sign Up</span>
                  </Link>
                  <NavDropdown.Divider />
                  <Link
                    to="/signout"
                    className="text-decoration-none text-danger"
                  >
                    <span className="text-center d-block">Sign Out</span>
                  </Link>
                </NavDropdown>
                <Button variant="warning" style={{ width: "150px" }}>
                  <NavLink
                    className="mx-3 text-dark fw-bold text-decoration-none"
                    to="/post-add"
                    style={{ fontSize: "16px" }}
                  >
                    Post Add
                  </NavLink>{" "}
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
