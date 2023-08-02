import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Choice.css";

const Choice = () => {
  return (
    <div className="container mt-5">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Job Collections
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="#">
              Software Engineer jobs
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Data Scientist jobs
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Junior developer jobs
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Startup jobs
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Remote jobs
            </a>
          </li>
        </ul>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Remote Jobs
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="#">
              Remote Software Engineer jobs
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Remote Data Scientist jobs
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Remote Junior developer jobs
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Remote Startup jobs
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              More Remote jobs
            </a>
          </li>
        </ul>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Jobs by Location
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="#">
              Jobs in India
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Jobs in Japan
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Jobs in USA
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Jobs in Australia
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Jobs in Canada
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Choice;
