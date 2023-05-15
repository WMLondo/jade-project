import React from "react";
import classes from "./Combobox.module.css";

const Combobox = (props) => {
  return <div className={classes.input}>{props.children}</div>;
};

export default Combobox;
