import React from "react";
import "./Projects.css";
import proj1 from "../../assets/project1.jpg";
import proj2 from "../../assets/project2.jpg";
import proj3 from "../../assets/project3.jpg";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <img src={proj1} alt="Project 1" />
          <p><b>CodeQuest</b><br />
           A platform for coding challenges and competitions.
           <br />
           <a href="https://github.com/saiprasad0905/CodeQuest.git" target="_blank" rel="noopener noreferrer">
          View on GitHub</a>
           </p>
          
        </div>
        <div className="project-card">
          <img src={proj2} alt="Project 2" />
          <p><b>SmartHealth </b><br />
          A Health Management System<br />
          <a href="https://github.com/saiprasad0905/SmartHealth.git" target="_blank" rel="noopener noreferrer">
          View on GitHub</a>
           </p>
        </div>
        <div className="project-card">
          <img src={proj3} alt="Project 3" />
          <p><b>ImageIQ</b><br /> A website for image recognition and analysis<br /><a href="https://github.com/saiprasad0905/ImageIQ" target="_blank" rel="noopener noreferrer">
    View on GitHub
  </a> </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
