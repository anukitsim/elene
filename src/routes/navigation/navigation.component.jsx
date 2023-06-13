import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navigation.styles.scss";
import logo from "../../assets/ukbac.logo.black.png";
import { Container, Col, Row } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

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
              <div className="dropdown">
                <Link
                  className="nav-link"
                  type="button"
                  id="shopDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </Link>
                <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/shop/kalgotkebi"
                    >
                      Kalgotkebi
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/shop/kupalnikebi"
                    >
                      Kupalnikebi
                    </Link>
                  </li>
                </ul>
              </div>
              <Link className="nav-link" to="/collection">
                Collection
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </div>
            <div className="nav-links2">
              {currentUser ? (
                <Link onClick={signOutUser} className="nav-link">
                  Log out
                </Link>
              ) : (
                <Link className="nav-link" to="/sign-in">
                  Log in
                </Link>
              )}
              <Link onClick={toggleIsCartOpen} className="nav-link">
                Cart
              </Link>
            </div>
          </Col>
          {isCartOpen && <CartDropDown />}
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
