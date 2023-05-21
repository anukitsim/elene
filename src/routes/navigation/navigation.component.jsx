import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import logo from "../../assets/ukbac.logo.black.png";
import { Container, Col, Row } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
 


  return (
    <div className="navigation-container">
      <Container fluid className="content-wrapper">
        <Row id="root">
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
              {
                currentUser ? (
                  <Link onClick={signOutUser} className="nav-link">Log out</Link>
                ) :
                (
                  <Link className="nav-link" to="/sign-in">
                  Log in
                </Link>
                )
              }
            
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </div>
          </Col>
        </Row>
        <Outlet />
      </Container>
      <footer className="footer">
        <Container>
          <Row>
            <Col className="footer-links">
              <Link className="footer-link" to="/instagram">
                Instagram
              </Link>
              <Link className="footer-link" to="/contact">
                Contact
              </Link>
              <Link className="footer-link" to="/help">
                Help
              </Link>
              <Link className="footer-link" to="/terms">
                T&C
              </Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Navigation;
