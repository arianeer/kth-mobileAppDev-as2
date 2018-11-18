import React from "react";
import Layout from "../components/layout";
import Menu from "../components/menu";

import Tile from "../components/tile";

import { trips } from "../data/trips";
import "./index.css";

const index = () => {
  const data = trips();
  const list = data.map((item, i) => {
    // console.log(item.image.img);
    // console.log(item.title);

    return (
      <div key={i} className="inner">
        <Tile src={item.image.img} title={item.title} />
      </div>
    );
  });

  return (
    <Layout>
      <Menu />
      <h1>Hello Gatsby!</h1>

      <div className="wrapper">{list}</div>
    </Layout>
  );
};
export default index;
