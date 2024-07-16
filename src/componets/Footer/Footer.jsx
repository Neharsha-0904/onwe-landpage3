import React from "react";
import "./Footer.css"; // Import the CSS file
import WordAnimation from "../Header/TextAnime.jsx";
const Footer = () => {
  return (
    <div className="footer-basic">
      <div className="footer">
        <div className="title">
          <WordAnimation />
        </div>
        <div className="f-r">
          <div className="social">
            <a href="https://www.instagram.com/onwe.in/">
              <i className="icon ion-social-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@OnwE2806"><i className="icon ion-social-youtube"></i></a>
            <a href="https://x.com/OnwE_2806">
              <i className="icon ion-social-twitter"></i>
            </a>
            {/* <a href="#">
              <i className="icon ion-social-linkedin"></i>
            </a> */}
          </div>
          {/* <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Home</a></li>
          <li className="list-inline-item"><a href="#">Services</a></li>
          <li className="list-inline-item"><a href="#">About</a></li>
          <li className="list-inline-item"><a href="#">Terms</a></li>
          <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
        </ul> */}
          <p className="copyright">108 - CV Raman Block, Parul University</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
