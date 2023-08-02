import React from "react";
import "./Card.css";

const Card = ({ title, desc, job }) => {
  return (
    <div className="card">
      <div className="c-title">
        <span>{title}</span>
        <span>{job}</span>
      </div>
      <div className="c-desc">{desc}</div>
    </div>
  );
};

export default Card;
