import React from "react";

import Layout from "../components/layout";

import Menu from "../components/menu";

import "./user.css";

const user = () => {
  return (
    <Layout>
      <Menu />
      <p>This is the user page</p>
      <a href="http://www.google.com">
        <img
          src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=480:*"
          alt="weee"
        />
      </a>
    </Layout>
  );
};

export default user;
