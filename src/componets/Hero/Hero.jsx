import React from "react";
import "./Hero.css";
import back from "../../assets/Back.png";
import apps from "../../assets/apps.png";


const Hero = () => {
  const spanStyle = {
    color: 'transparent',
    WebkitTextStroke: '1px black',
  }
  return (
    <div className="Hero">
      <div className="hero">
        <div className="left-H">
          <span>Step into <span style={spanStyle} >our</span> Realm! </span>
          <span>
          Join a vibrant community where everyone unites, fostering inspiration and collaboration in every corner.
          </span>
          <div>
            <button href="https://forms.gle/JD7J2V6S1MqVSbti8">Connect</button>
            <button>Pre-Register</button>
          </div>
          {/* <div>
            <img src={apps} alt="" />
          </div> */}
        </div>
        <div className="right-H">
          <img src={back} alt="" />
        </div>
      </div>
      {/* <div className="hero2">
        <div className="hero2-t">
          <span>Trusted by design teams at</span>
          <div>for sponsor and collabrations partners images</div>
        </div>
        <div className="hero2-b">
          <div>
            <span>06</span>
            <span>Officers are availabe on different countries</span>
          </div>
          <div>
            <span>238</span>
            <span>Seats are availabe right now with dedicated support</span>
          </div>
          <div>
            <span>1,395</span>
            <span>People are using our co-work spaces right now</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
