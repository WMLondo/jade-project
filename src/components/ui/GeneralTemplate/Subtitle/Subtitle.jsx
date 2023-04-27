import React from "react";
import classes from "./Subtitle.module.css";

const Subtitle = ({ children }) => {
  return <h2 className={classes.subtitle}>{children}</h2>;
};

export default Subtitle;
