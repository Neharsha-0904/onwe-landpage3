import React from "react";
import "./Updates.css";
import u1 from "../../assets/clubs/u1.png";
const Updates = () => {
  return (
    <div className="Updates">
      <div className="updates-l">
        <img src={u1} alt="" />
      </div>
      <div className="updates-m">
        <span>Get latest updates</span>
        <span>
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </span>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
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
