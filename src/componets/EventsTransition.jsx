import React, { useState } from "react";
import "./EventsTransition.css";

import projectionsImage from "../assets/img/projections.jpeg";
import edmImage from "../assets/img/edm.jpeg";
import nccImage from "../assets/img/NCC.jpeg";
import sportsImage from "../assets/img/sports.jpeg";
import festImage from "../assets/img/fest.jpeg";
import cultureImage from "../assets/img/culture.jpeg";
import holiImage from "../assets/img/holi.jpeg";
import artImage from "../assets/img/Art.jpeg";


const panelsData = [
  { id: "panel-1", title: "Tech", image: projectionsImage },
  { id: "panel-2", title: "EDM", image: edmImage },
  { id: "panel-3", title: "NCC", image: nccImage },
  { id: "panel-4", title: "Sports", image: sportsImage },
  { id: "panel-5", title: "Fest", image: festImage },
  { id: "panel-6", title: "Culture", image: cultureImage },
  { id: "panel-7", title: "Holi", image: holiImage },
  { id: "panel-8", title: "Art", image: artImage },
];

const Panel = ({ id, title, image, isActive, onClick }) => {
  return (
    <div
      className={`panel ${isActive ? "active" : ""}`}
      id={id}
      style={{ backgroundImage: `url(${image})` }}
      onClick={() => onClick(id)}
    >
      <h3>{title}</h3>
    </div>
  );
};

const EventsTransition = () => {
  const [activePanel, setActivePanel] = useState("panel-1");

  const handlePanelClick = (id) => {
    setActivePanel(id);
  };

  return (
    <div className="container">
      {panelsData.map((panel) => (
        <Panel
          key={panel.id}
          id={panel.id}
          title={panel.title}
          image={panel.image}
          isActive={activePanel === panel.id}
          onClick={handlePanelClick}
        />
      ))}
    </div>
  );
};

export default EventsTransition;
