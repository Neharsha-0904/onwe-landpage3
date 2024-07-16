import React from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const renderListItems = () => {
    const items = ["A", "B", "C", "D", "E", "6", "7", "8", "9"];
    return items.map((item, index) => <li key={index}>{item}</li>);
  };

  const renderGallery = () => {
    const galleryItems = [];
    for (let n = 0; n < 6; n++) {
      galleryItems.push(
        <ul key={n} className={styles[`image${n + 1}`]}>
          {renderListItems()}
        </ul>
      );
    }
    return galleryItems;
  };

  return (
    <div className={styles.pad}>
      <div className={styles.title}>C L U B S</div>
      <div className={styles.gallery}>{renderGallery()}</div>
    </div>
  );
};

export default Gallery;
