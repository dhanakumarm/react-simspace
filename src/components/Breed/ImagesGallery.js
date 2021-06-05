import React from "react";

import classes from "./ImagesGallery.module.css";

const ImageGallery = (props) => {
  return (
    <React.Fragment>
      <div className={classes.column}>
        <img src={props.imgUrl} alt="" onLoad={props.imgOnload} />
      </div>
    </React.Fragment>
  );
};

export default ImageGallery;
