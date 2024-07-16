import React from "react";
import "./Updates.css";
import u1 from "../../assets/clubs/u1.png";
const Updates = () => {
  const handleConnectClick = () => {
    window.open("https://forms.gle/JD7J2V6S1MqVSbti8", "_blank");
  };
  return (
    <div className="Updates">
      <div className="updates-l">
        <img src={u1} alt="" />
      </div>
      <div className="updates-m">
        <span>Stay Updated!</span>
        <span>
          We will keep in contact with you, we are just one step away from that.
        </span>
        <form>
          {/* <input type="email" placeholder="Enter your email" /> */}
          <button onClick={handleConnectClick}>Connect</button>
        </form>
        <span>
          We'll never share your details with third parties. View our Privacy
          Policy for more info.
        </span>
      </div>
      <div className="updates-r">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Updates;
