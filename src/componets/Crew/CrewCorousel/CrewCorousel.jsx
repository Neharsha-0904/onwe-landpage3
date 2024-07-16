import React from "react";
import "./CrewCorousel.css";
import c1 from "../../../assets/Crew/c1.jpg";
import c2 from "../../../assets/Crew/c2.jpg";
import c3 from "../../../assets/Crew/c3.jpg";

const CrewCorousel = () => {
  return (
    <div className="pic-ctn">
      <img src={c1} alt="Crew 1" className="pic" />
      <img src={c2} alt="Crew 2" className="pic" />
      <img src={c3} alt="Crew 3" className="pic" />
    </div>
  );
};

export default CrewCorousel;
