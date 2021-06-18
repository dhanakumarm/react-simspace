import React from "react";

import classes from "./Layout.module.css";
import BreedImageList from "../Breed/BreedImageList";

const Footer = () => {
  return (
    <footer>
      <div className={classes.images}>
        <BreedImageList />
      </div>
    </footer>
  );
};

export default Footer;
