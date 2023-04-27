import React from "react";
import classes from "./RedirectIcon.module.css";
import StyledLink from "../../ui/StylesLink/StyledLink";

const RedirectIcon = ({
  children,
  description,
  linkContent,
  path,
  isInsideApp,
}) => {
  return (
    <div className={classes.container}>
      {children}
      <div className={classes.content}>
        {isInsideApp ? (
          <StyledLink to={path} color="var(--primary-color-200)">
            {linkContent}
          </StyledLink>
        ) : (
          <a
            className={classes.link}
            href={path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkContent}
          </a>
        )}
        <span className={classes.description}>{description}</span>
      </div>
    </div>
  );
};

export default RedirectIcon;
