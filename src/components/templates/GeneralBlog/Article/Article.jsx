import React from "react";
import classes from "./Article.module.css";

const Article = ({ children }) => {
  return <article className={classes.article}>{children}</article>;
};

export default Article;
