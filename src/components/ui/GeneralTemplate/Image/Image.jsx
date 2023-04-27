import React from "react";
import classes from "./Image.module.css";

const Image = ({ url, alt }) => {
  return (
    <div className={classes["image-container"]}>
      <img className={classes.image} src={url} alt={alt} />
    </div>
  );
};

export default Image;
