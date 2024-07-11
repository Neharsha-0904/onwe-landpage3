import React from "react";
import "./Crew.css";
import crew from "../../assets/crew.png";
const Crew = () => {
  return (
    <div className="Crew">
      <div className="crew-r">
        <div>
          <span>Connect with the crew:</span>
          <span>
            Meet the group behind the door responsible for the project.
          </span>
        </div>
        <div>
          <span>Development Based:</span>
          <span>
            Responsible for the Website,Application and all other technical
            jamboree to host all of us.
          </span>
        </div>
        <div>
          <span>Content based:</span>
          <span>
            Responsible for the content hosted on the platform the development
            guys have provided.
          </span>
        </div>
      </div>
      <div className="crew-l">
        <img src={crew} alt="" />
      </div>
    </div>
  );
};

export default Crew;
