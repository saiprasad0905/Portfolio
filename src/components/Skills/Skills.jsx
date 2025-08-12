import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => (
  <section id="skills" className="skills">
    <h2>Skills</h2>
    <div className="skill-icons">
      <div><FaReact /> <span>React.js</span></div>
      <div><FaNodeJs /> <span>Node.js</span></div>
      <div><FaPython /> <span>Python</span></div>
      <div><FaHtml5 /> <span>HTML</span></div>
      <div><FaCss3Alt /> <span>CSS</span></div>
      <div><FaJsSquare /> <span>JavaScript</span></div>
      <div><SiMysql /> <span>MySQL</span></div>
      <div><SiPostgresql /> <span>PostgreSQL</span></div>
      <div><SiMongodb /> <span>MongoDB</span></div>
      <div><FaGithub /> <span>GitHub</span></div>
      {/* <div><FaKotlin/><span>Kotlin</span></div> */}
    </div>
  </section>
);

export default Skills;
