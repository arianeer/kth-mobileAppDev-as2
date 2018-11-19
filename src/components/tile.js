import React from "react";

import "./tile.css";

const Tile = props => {
  return (
    <div className="tile">
      <a href="/trip">
      <img className="tile_image" src={props.src} alt={props.src} />
      <div className="tile__image-mask" />
      <h3 className="tile__text">{props.title}</h3>
      <i className="fas fa-user-circle fa-2x" />
      </a>
    </div>
  );
};

export default Tile;