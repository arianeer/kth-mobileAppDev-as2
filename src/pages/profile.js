import React from "react";

import Layout from "../components/layout";

import Menu from "../components/menu";

import "./profile.css";

const profile = () => {
  return (
    <Layout>
      <Menu />
      <h1>Profile</h1>
      <h2>Alexandra</h2>
      <a href="https://www.facebook.com/alexandra.kolonia">
        <img
          src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/43952438_1854309891289261_6403780531640598528_n.jpg?_nc_cat=103&_nc_ht=scontent-arn2-1.xx&oh=ce15a8fecc95cfca412cdf2958e39479&oe=5C6789C3"
          alt="weee"
        />
      </a>
      <h3>Interests:</h3>
      <p>food...</p>
      <h3>Age:</h3>
      <p>19</p>
      <h3>Favorite places:</h3>
      <p>Stockholm</p>
      <h3>Bio:</h3>
      <p>This is a bio.</p>
      <a href="/profile">
        <button class="primary-button">
            Send a message
        </button>
      </a>
    </Layout>
  );
};

export default profile;