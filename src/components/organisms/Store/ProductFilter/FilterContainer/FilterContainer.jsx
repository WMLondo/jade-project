import React from "react";
import classes from "./FilterContainer.module.css";

const FilterContainer = ({ children }) => {
  return <div className={classes["filter-option-container"]}>{children}</div>;
};

export default FilterContainer;
