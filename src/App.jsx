import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact"; 
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
