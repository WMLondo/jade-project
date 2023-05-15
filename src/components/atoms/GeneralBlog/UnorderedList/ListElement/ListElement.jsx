import React from "react";
import classes from "./ListElement.module.css";

const ListElement = ({ children }) => {
  return <li className={classes["list-element"]}>{children}</li>;
};

export default ListElement;
