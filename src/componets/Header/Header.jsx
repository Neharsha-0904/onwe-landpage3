import React from "react";
import ludo from "../../assets/ludo.png";
import "./Header.css";

const Header = () => {
  const handleConnectClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSczAE56toRR-aNbI4fov4COyfutQE5weEbJOM0NRuOaM8ilEw/viewform", "_blank");
  };

  return (
    <div className="Header">
      <div className="h1">
        <span>Onwe Beta </span>
        <span>Connect - Create - Cherish</span>
      </div>
      <div className="h2">
        <div>
          <img src={ludo} alt="" />
          <span>nwe</span>
        </div>
        <div>
          <span>Home</span>
          <span className="airbnb" onClick={handleConnectClick} style={{ cursor: "pointer", textDecoration: "underline" }}>
            <img className="airbnb-img" src="/img/send-2.svg" alt="Connect" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
