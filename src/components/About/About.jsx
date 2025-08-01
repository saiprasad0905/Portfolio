import React from "react";
import "./About.css";
// import profileImg from "../../assets/profile.jpg"; // adjust this if needed
// import profileImg from "../../assets/profile.jpg";

const About = () => (
  <section id="about" className="about">
    <h2>About Me</h2>
    {/* <img src={profileImg} alt="Profile" className="profile-img" /> */}
    <p>
      I am a passionate software developer focused on building impactful web applications and exploring cutting-edge AI technologies.
      I enjoy solving complex problems and continuously learning new tools and frameworks.
    </p>
  </section>
);

export default About;
