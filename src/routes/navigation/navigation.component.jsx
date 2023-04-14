import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo">LOGO</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <div className="sign-in-container">
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
