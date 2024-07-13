import React from "react";
import './NewHero.css'
import Header from "./Header/Header";
import back from "/img/onwe-main.png";

const NewHero = () => {
 
  return (
    <div className="h">
        <div className="h-l">
            <div><Header/></div>
            <div><Hero/></div>
        </div>
        <div className="h-r">
        <img src={back} alt="" />
        </div>
    </div>
  );
};

export default NewHero;
