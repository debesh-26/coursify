import React from "react";
import "./About.css";
import { data, posts } from "../Data";
import Card from "./Card";
import Choice from "./Choice";

const About = () => {
  return (
    <div className="about">
      <div className="a-heading">More than 10,000 top companies hiring</div>
      <div className="slider-container">
        <ul className="slider">
          {data.map((item) => (
            <li key={item.id} className="slide">
              <img src={item.img} alt="" className="slide-img" />
            </li>
          ))}
        </ul>
      </div>
      <Choice />
      <div className="description">
        <div className="d-title">
          Want to grab the opportunity ? Let's join with us and explore the
          world. Sign up or Login to continue with us..
        </div>
        <div className="d-btns">
          <button className="button">Sign up</button>
          <button className="button">Login</button>
        </div>
      </div>
      <div className="a-heading">Why job seekers love us ?</div>
      <div className="about-jobs">
        <ul className="about-job">
          <li>
            Unique jobs at startups and tech companies you can't find anywhere
            else
          </li>
          <li>
            Say goodbye to cover letters - your profile is all you need. One
            click to apply and you're done.
          </li>
          <li>
            Everything you need to know to job search - including seeing salary
            and stock options upfront when looking
          </li>
          <li>
            Connect directly with founders at top startups - no third party
            recruiters allowed
          </li>
        </ul>
        <div className="img-container">
          <img src="/images/img-2.png" alt="" className="about-img" />
        </div>
      </div>
      <div className="a-heading">Why recruiters love us ?</div>
      <div className="about-jobs">
        <div className="img-container">
          <img src="/images/img-1.png" alt="" className="about-img" />
        </div>
        <ul className="about-job">
          <li>
            8 million responsive and startup-ready candidates, with all the
            information you need to vet them
          </li>
          <li>
            Everything you need to kickstart your recruiting - get job posts,
            company branding, and HR tools set up within 10 minutes, for free
          </li>
          <li>
            A free applicant tracking system, or free integration with any ATS
            you may already use
          </li>
        </ul>
      </div>
      <div className="a-heading">Let's have a look on the posts...</div>
      <ul className="post">
        {posts.map((item) => (
          <li key={item.id}>
            <Card title={item.title} desc={item.desc} job={item.job} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
