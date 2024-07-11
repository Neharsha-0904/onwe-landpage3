import React from "react";
import ludo from "../../assets/ludo.png";
import "./Header.css";
const Header = () => {
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
          <span>Connect</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
