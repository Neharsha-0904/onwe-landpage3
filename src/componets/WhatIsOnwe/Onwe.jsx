import React from "react";
import "./Onwe.css";
import q from "../../assets/q.png";
import InfiniteScrollComponent from "./HorizontalScroll";

const Onwe = () => {
  return (
    <div className="onwe">
      <div>
        <div>
          <span>What is ONWE</span>
          <img src={q} alt="" />
        </div>
        <span className="content">
        University communities spark, glisten, and ignite connections and shared culture.
        Join Us to redefine Campus Engagement and Unity!
        </span>
      </div>
    </div>
  );
};

export default Onwe;
