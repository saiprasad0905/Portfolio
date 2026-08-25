import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Certifications.css";
import cert1 from "../../assets/certificate1.png";
import cert2 from "../../assets/certificate2.png";
import cert3 from "../../assets/certificate3.png";
import cert4 from "../../assets/certificate4.png";
import cert5 from "../../assets/certificate5.png";

const SCROLL_STEP = 355; // card width (335) + gap (20)

const Certifications = () => {
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
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="certification-carousel">
        {canScrollLeft && (
          <button
            type="button"
            className="carousel-arrow carousel-arrow-left"
            aria-label="Scroll certifications left"
            onClick={() => scrollByDir(-1)}
          >
            ‹
          </button>
        )}
        <div
          className="certification-list"
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
        >
          <div className="certification-card">
            <img src={cert1} alt="Certificate 1" draggable="false" />
            <p>AICTE AI Internship</p>
          </div>
          <div className="certification-card">
            <img src={cert2} alt="Certificate 2" draggable="false" />
            <p>AWS cloud practitioner</p>
          </div>
          <div className="certification-card">
            <img src={cert3} alt="Certificate 3" draggable="false" />
            <p>Oracle certified foundations Associate</p>
          </div>
          <div className="certification-card">
            <img src={cert4} alt="Certificate 4" draggable="false" />
            <p>Essentlals Automation Proessional by Automation Anywhere</p>
          </div>
          <div className="certification-card">
            <img src={cert4} alt="Certificate 5" draggable="false" />
            <p>Microsoft Certified: Azure AI Associate</p>
          </div>
        </div>
        {canScrollRight && (
          <button
            type="button"
            className="carousel-arrow carousel-arrow-right"
            aria-label="Scroll certifications right"
            onClick={() => scrollByDir(1)}
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
};

export default Certifications;
