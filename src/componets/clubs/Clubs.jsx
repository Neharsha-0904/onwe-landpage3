import React from "react";
import "./Clubs.css";
import p1 from "../../assets/clubs/p1.png";
import p2 from "../../assets/clubs/p2.png";
import p3 from "../../assets/clubs/p3.png";
import InfiniteScrollComponent from "../WhatIsOnwe/HorizontalScroll";
import Gallery from "../Gallery";

const Clubs = () => {
  return (
    <div className="clubs">
      <Gallery />
      {/* <div className="clubs1">
        <div className="clubs1-l">
          <img src={p1} alt="" />
          <span>Sports Club</span>
          <span>Explore the sports updates!</span>
          <button>Join Now</button>
        </div>
        <div className="plates"></div>
        <div className="plates2"></div>
        <div className="clubs1-r">
          <span>Join our Club</span>
          <span>Clubs tailored to one's own tastes</span>
          <span>Explore more Clubs</span>
          <span>Create More</span>
        </div>
      </div> */}
      <InfiniteScrollComponent />
      <div className="clubs2">
        <div className="clubs2-l">
          <img src={p2} alt="" />
          <span># 1 st Mazie</span>
          <span>
            subscribe To Our Email Newsletter Now And Stay Informed About The
            Latest Updates.
          </span>
        </div>
        <div className="clubs2-r">
          <span>Latest Mazie</span>
          <span>
            subscribe To Our Email Newsletter Now And Stay Informed About The
            Latest Updates.
          </span>
          <img src={p3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clubs;
