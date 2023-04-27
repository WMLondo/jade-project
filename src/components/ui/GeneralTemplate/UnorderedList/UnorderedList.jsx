import React from "react";
import classes from "./UnorderedList.module.css";

const UnorderedList = ({ children }) => {
  return <ul className={classes["unordered-list"]}>{children}</ul>;
};

export default UnorderedList;
