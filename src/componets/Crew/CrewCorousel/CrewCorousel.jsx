import React from "react";
import "./CrewCorousel.css";
import c1 from "../../../assets/Crew/c1.jpg";
import c2 from "../../../assets/Crew/c2.jpg";
import c3 from "../../../assets/Crew/c3.jpg";
const CrewCarousel = () => {
  return (
    <div className="pic-ctn">
      <img src={c1} alt="" className="pic" />
      <img src={c2} alt="" className="pic" />
      <img src={c3} alt="" className="pic" />
    </div>
  );
};

export default CrewCarousel;
