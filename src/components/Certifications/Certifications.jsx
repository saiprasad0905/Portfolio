import React from "react";
import "./Certifications.css";
import cert1 from "../../assets/certificate1.png";
import cert2 from "../../assets/certificate2.png";
import cert3 from "../../assets/certificate3.png";
import cert4 from "../../assets/certificate4.png";


const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="certification-list">
        <div className="certification-card">
          <img src={cert1} alt="Certificate 1" />
          <p>AICTE AI Internship</p>
        </div>
        <div className="certification-card">
          <img src={cert2} alt="Certificate 2" />
          <p>AWS cloud practitioner</p>
        </div>
        <div className="certification-card">
          <img src={cert3} alt="Certificate 3" />
          <p>Oracle certified foundations Associate</p>
        </div>
        <div className="certification-card">
          <img src={cert4} alt="Certificate 4" />
          <p>Essentlals Automation Proessional by Automation Anywhere</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
