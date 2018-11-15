import React from "react";
import { Link } from "gatsby";

import Menu from "../components/menu";

import "./user.css";

const user = () => {
  return (
    <div>
      <Menu />

      <p>This is the user page</p>
      <a href="http://www.google.com">
        <img
          src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=480:*"
          alt="weee"
        />
      </a>
    </div>
  );
};

export default user;
