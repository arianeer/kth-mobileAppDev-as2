import React from "react";

import { Link } from "gatsby";

import "./menu.css";

export default () => (
  <>
    <Link className="menu-item-link" to="/">
      Home
    </Link>

    <Link className="menu-item-link" to="/user">
      User
    </Link>

    <Link className="menu-item-link" to="/">
      About
    </Link>
    <Link className="menu-item-link" to="/trip"
  </>
);
