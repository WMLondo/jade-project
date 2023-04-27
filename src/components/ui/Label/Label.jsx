import React from "react";
import { LabelContent } from "./Label.styles";

const Label = ({ children, style }) => {
  return <LabelContent style={style}>{children}</LabelContent>;
};

export default Label;
