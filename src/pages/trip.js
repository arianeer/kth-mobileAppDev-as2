import React from "react";

import Layout from "../components/layout";

import Menu from "../components/menu";

import "./trip.css";

const trip = () => {
  return (
    <Layout>
      <Menu />
      <h1>Trip</h1>
      <h2>Venice</h2>
      <a href="http://www.google.com">
        <img
          src="https://www.prestigeproperty.co.uk/PropertyImages/LargeImages/184778.jpg"
          alt="weee"
        />
      </a>
      <h3>Date:</h3>
      <p>19/11/2018 - 23/11/2018</p>
      <h3>Description:</h3>
      <p>This is a trip to venice</p>
      <a href="/profile">
        <button class="primary-button">
            GO to host's profile
        </button>
      </a>
    </Layout>
  );
};

export default trip;