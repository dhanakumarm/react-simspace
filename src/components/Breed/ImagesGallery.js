import React from "react";

import classes from "./ImagesGallery.module.css";

const ImageGallery = ({ imgUrl, imgOnload }) => {
  return (
    <>
      <div className={classes.column}>
        <img src={imgUrl} alt="" onLoad={imgOnload} />
      </div>
    </>
  );
};

export default ImageGallery;
