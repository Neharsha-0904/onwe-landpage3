import React from "react";
import ludo from "../../assets/ludo.png";
import sendImg from "../../assets/img/send-2.svg"
import "./Header.css";

const Header = () => {
  const handleConnectClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSczAE56toRR-aNbI4fov4COyfutQE5weEbJOM0NRuOaM8ilEw/viewform",
      "_blank"
    );
  };

  return (
    <div className="nh">
      <div className="Header">
        <div className="h1">
          <div>
            <span>Beta </span>
            <span>Connect - Create - Cherish</span>
          </div>
        </div>
        <div className="h2">
          <div>
            <img src={ludo} alt="" />
            <span>nwe</span>
          </div>
          <div>
            <span>Home</span>
            <span
              className="airbnb"
              onClick={handleConnectClick}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              <img className="airbnb-img" src={sendImg} alt="Connect" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
