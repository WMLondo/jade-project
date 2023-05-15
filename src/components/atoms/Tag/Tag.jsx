import React from "react";
import { TagContainer, TagLabel } from "./Tag.styles";

const Tag = ({ url, children, h, w }) => {
  return (
    <TagContainer width={w} height={h}>
      <TagLabel to={url}>{children}</TagLabel>
    </TagContainer>
  );
};

export default Tag;
