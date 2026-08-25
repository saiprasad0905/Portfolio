import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Projects.css";
import proj1 from "../../assets/project1.jpg";
import proj2 from "../../assets/project2.jpg";
import proj3 from "../../assets/project3.jpg";
import proj4 from "../../assets/project4.jpg";

const SCROLL_STEP = 365; // card width (345) + gap (20)

const Projects = () => {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrowState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < maxScroll - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateArrowState();
    el.addEventListener("scroll", updateArrowState, { passive: true });

    const onWheel = (e) => {
      if (el.scrollWidth <= el.clientWidth) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    const onResize = () => updateArrowState();
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", updateArrowState);
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
    };
  }, [updateArrowState]);

  const scrollByDir = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * SCROLL_STEP, behavior: "smooth" });
  };

  const onPointerDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    isDragging.current = true;
    hasDragged.current = false;
    startX.current = e.clientX;
    startScrollLeft.current = el.scrollLeft;
    el.setPointerCapture?.(e.pointerId);
    el.classList.add("is-dragging");
  };

  const onPointerMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 4) hasDragged.current = true;
    trackRef.current.scrollLeft = startScrollLeft.current - dx;
  };

  const endDrag = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    trackRef.current?.classList.remove("is-dragging");
    trackRef.current?.releasePointerCapture?.(e.pointerId);
  };

  const onClickCapture = (e) => {
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged.current = false;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-carousel">
        {canScrollLeft && (
          <button
            type="button"
            className="carousel-arrow carousel-arrow-left"
            aria-label="Scroll projects left"
            onClick={() => scrollByDir(-1)}
          >
            ‹
          </button>
        )}
        <div
          className="project-list"
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
        >
          <div className="project-card">
            <img src={proj1} alt="Project 1" draggable="false" />
            <p>
              <b>CodeQuest</b>
              <br />
              A platform for coding challenges and competitions.
              <br />
              <a
                href="https://github.com/saiprasad0905/CodeQuest.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </p>
          </div>
          <div className="project-card">
            <img src={proj2} alt="Project 2" draggable="false" />
            <p>
              <b>SmartHealth </b>
              <br />
              A Health Management System
              <br />
              <a
                href="https://github.com/saiprasad0905/SmartHealth.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </p>
          </div>
          <div className="project-card">
            <img src={proj3} alt="Project 3" draggable="false" />
            <p>
              <b>ImageIQ</b>
              <br /> A website for image recognition and analysis
              <br />
              <a
                href="https://github.com/saiprasad0905/ImageIQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>{" "}
            </p>
          </div>
          <div className="project-card">
            <img src={proj4} alt="Project 4" draggable="false" />
            <p>
              <b>Nirmaan-Build-the-future</b>
              <br /> A website for Hackathon registration and management
              <br />
              <a
                href="https://github.com/saiprasad0905/Nirmaan-Build-the-future.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>{" "}
            </p>
          </div>
        </div>
        {canScrollRight && (
          <button
            type="button"
            className="carousel-arrow carousel-arrow-right"
            aria-label="Scroll projects right"
            onClick={() => scrollByDir(1)}
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
