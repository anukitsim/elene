import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import logo from "../../assets/ukbac.logo.black.png";
import { Container, Col, Row } from "react-bootstrap";

const Navigation = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="logo-div">
          <Link className="logo-link" to="/">
            <img className="logo" src={logo} alt="logo.png" />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="links-col">
          <div className="nav-links1">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            <Link className="nav-link" to="/collection">
              Collection
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </div>
          <div className="nav-links2">
            <Link className="nav-link" to="/sign-in">
              Log in
            </Link>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </div>
        </Col>
      </Row>
      <Outlet />
      <Row className="footer">
        <Col className="footer-links">
          <Link className="footer-link" to="/instagram">Instagram</Link>
          <Link className="footer-link" to="/contact">Contact</Link>
          <Link className="footer-link" to="/help">Help</Link>
          <Link className="footer-link" to="/terms">Terms & Conditions</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
