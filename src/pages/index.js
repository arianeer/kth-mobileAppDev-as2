import React from "react";
import Menu from "../components/menu";
const index = () => {
  const number = 1;
  return (
    <div style={{ color: `purple` }}>
      <Menu />
      <h1>Hello Gatsby!</h1>
      <p>What a number {number}.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="Coolnesss" />
    </div>
  );
};
export default index;
