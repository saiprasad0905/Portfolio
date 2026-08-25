import React from "react";
import "./Resume.css";
import resume from "../../assets/K_Sai_Prasad_Resume.pdf";

// Put your actual resume PDF at: public/resume/SaiPrasad_Resume.pdf
const RESUME_PATH = resume;

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <p className="resume-subtitle">
        View or Download my latest resume below.
      </p>
      <div className="resume-actions">
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn view-btn"
        >
          View Resume
        </a>
        <a
          href={RESUME_PATH}
          download="SaiPrasad_Resume.pdf"
          className="resume-btn download-btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
