import React from 'react';
import './Gallery.css'; // Import your CSS file

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__strip one">
        <div className="gallery__strip__wrapper">
          <div className="photo">
            <div className="photo__image">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg" alt="Kyoto" />
            </div>
            <div className="photo__name">Kyoto</div>
          </div>
          {/* Repeat other .photo items for strip one */}
        </div>
      </div>

      <div className="gallery__strip two">
        <div className="gallery__strip__wrapper">
          <div className="photo">
            <div className="photo__image">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-italy.jpeg" alt="Italy" />
            </div>
            <div className="photo__name">Italy</div>
          </div>
          {/* Repeat other .photo items for strip two */}
        </div>
      </div>

      <div className="gallery__strip three">
        <div className="gallery__strip__wrapper">
          <div className="photo">
            <div className="photo__image">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-cusco.jpeg" alt="Cusco" />
            </div>
            <div className="photo__name">Cusco</div>
          </div>
          {/* Repeat other .photo items for strip three */}
        </div>
      </div>

      <div className="gallery__strip four">
        <div className="gallery__strip__wrapper">
          <div className="photo">
            <div className="photo__image">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-milan.jpeg" alt="Milan" />
            </div>
            <div className="photo__name">Milan</div>
          </div>
          {/* Repeat other .photo items for strip four */}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
