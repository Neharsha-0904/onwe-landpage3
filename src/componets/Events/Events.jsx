import React from "react";
import "./Events.css";
import e1 from "../../assets/clubs/e1.png";
import EventsTransition from "./EventsTransition";

const Events = () => {
  return (
    <div className="Events">
      <div className="events-l">
        <span>Never run out of events again.</span>
        <span>
          Events Organised within the uni is regualrly announced via OnwE.
          Click in to View more.
        </span> 
      </div>
      <div className="events-transition">
        <EventsTransition />
      </div>
      
    </div>
  );
};

export default Events;
