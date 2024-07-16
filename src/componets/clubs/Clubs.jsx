import React, { useEffect, useRef, useState } from "react";
import "./Clubs.css";
import p2 from "../../assets/clubs/p2.png";
import p3 from "../../assets/clubs/p3.png";
import InfiniteScrollComponent from "../WhatIsOnwe/HorizontalScroll";
import Gallery from "../Gallery";

const Clubs = () => {
  const leftPlateRef = useRef(null);
  const rightPlateRef = useRef(null);
  const [showMagazines, setShowMagazines] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });

      if (entries.some((entry) => entry.isIntersecting)) {
        setShowMagazines(true);
        setTimeout(() => setShowMagazines(false), 2000); // Hide after 2 seconds
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (leftPlateRef.current) {
      observer.observe(leftPlateRef.current);
    }
    if (rightPlateRef.current) {
      observer.observe(rightPlateRef.current);
    }

    return () => {
      if (leftPlateRef.current) {
        observer.unobserve(leftPlateRef.current);
      }
      if (rightPlateRef.current) {
        observer.unobserve(rightPlateRef.current);
      }
    };
  }, []);

  return (
    <div className="clubs">
      <Gallery />
      <InfiniteScrollComponent />
      {showMagazines && <div className="magazines-message">Magazines</div>}
      <div className="clubs2">
        <div className="clubs2-l" ref={leftPlateRef}>
          <img src={p2} alt="" />
          <span># 1 st Magazine</span>
          <span>
          The story of how this very platform (and our magazine) had started.

          </span>
        </div>
        <div className="clubs2-r" ref={rightPlateRef}>
          <span>Latest Magazine</span>
          <span>
          Read our latest Magazine featuring various stories across the university.
          </span>
          <img src={p3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clubs;
