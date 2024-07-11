import React from "react";
import "./Clubs.css";
import p1 from "../../assets/clubs/p1.png";
import p2 from "../../assets/clubs/p2.png";
import p3 from "../../assets/clubs/p3.png";

const Clubs = () => {
  return (
    <div className="clubs">
      <div className="clubs1">
        <div className="clubs1-l">
          <img src={p1} alt="" />
          <span>Sports Club</span>
          <span>Officers are available on different countries.</span>
          <button>Join Now</button>
        </div>
        <div className="plates"></div>
        <div className="plates2"></div>
        <div className="clubs1-r">
          <span>Trade to Earn</span>
          <span>Earn $SPAAcE every time you buy and sell NFTs.</span>
          <span>Explore collectionson Spaces</span>
          <span>Buy and sell NFTs</span>
        </div>
      </div>
      <div className="clubs2">
        <div className="clubs2-l">
          <img src={p2} alt="" />
          <span># 1 st Mazie</span>
          <span>
            subscribe To Our Email Newsletter Now And Stay Informed About The
            Latest Updates.
          </span>
        </div>
        <div className="clubs2-r">
          <span>Latest Mazie</span>
          <span>
            subscribe To Our Email Newsletter Now And Stay Informed About The
            Latest Updates.
          </span>
          <img src={p3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clubs;
