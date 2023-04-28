import React from "react";
import classes from "./FooterLink.module.css";
import StyledLink from "../../ui/StylesLink/StyledLink";

const FooterLinks = ({ title, linkOptions }) => {
  return (
    <div className={classes["links-container"]}>
      <span className={classes.title}>{title}</span>
      <ul className={classes.links}>
        {linkOptions.map((link) => {
          return (
            <li className={classes.element} key={crypto.randomUUID()}>
              <StyledLink to={link.path.toLowerCase()}>{link.label}</StyledLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
