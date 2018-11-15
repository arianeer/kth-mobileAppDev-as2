import React from "react";
import Layout from "../components/layout";
import Menu from "../components/menu";

const index = () => {
  const number = 1;
  return (
    <Layout>
      <Menu />
      <h1>Hello Gatsby!</h1>
      <p>What a number {number}.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="Coolnesss" />
    </Layout>
  );
};
export default index;
