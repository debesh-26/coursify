import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="m-text">
        <div className="m-wlcm">Welcome to </div>
        <div className="m-heading">Let's Hire </div>
        <div className="m-desc">Where startups and jobseekers connect...</div>
        <div className="m-btns">
          <button className="button">Explore</button>
          <button className="button">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
