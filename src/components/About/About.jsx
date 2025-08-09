import React from "react";
import { ReactTyped } from "react-typed";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>
          Hi, I'm{" "}
          <ReactTyped
            strings={[
              "Sai Prasad",
              "a Web Developer",
              "an AI Enthusiast",
              "a Problem Solver"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h1>
        <p>
          I'm a third-year student and a software developer enthusiast aiming to
          build innovative AI solutions while staying updated with the latest
          advancements in technology.
        </p>
        <div className="about-buttons">
          <button 
            className="about-btn"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </button>
          <button 
            className="about-btn"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;