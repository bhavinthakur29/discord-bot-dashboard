import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-icon">
        <i className={props.icon}></i>
      </div>
      <div className="card-head">{props.title}</div>
      <div className="card-body">{props.description}</div>
      <div className="card-btn">
        <button>See more</button>
      </div>
    </div>
  );
};

export default Card;
