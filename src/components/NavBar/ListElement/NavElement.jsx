import React from "react";
import classes from "./NavElement.module.css";
import { NavLink } from "react-router-dom";

const NavElement = ({ path, children }) => {
  return (
    <li className={classes.list}>
      <NavLink className={classes.link} to={path}>
        {children}
      </NavLink>
    </li>
  );
};

export const NavElementWithoutRoute = ({
  disabledHover,
  clickHandler,
  children,
}) => {
  return (
    <li className={classes.list} onClick={clickHandler}>
      <div
        className={`${classes.link} ${
          disabledHover ? classes["no-hover"] : ""
        }`}
      >
        {children}
      </div>
    </li>
  );
};

export default NavElement;
