import React from "react";

import { ImageContainer, ImageElement } from "./Image.styles";

const Image = ({ width, height, borderRadius, url, alt }) => {
  return (
    <ImageContainer
      style={{ width: width, height: height }}
      borderRadius={borderRadius}
    >
      <ImageElement src={url} alt={alt} />
    </ImageContainer>
  );
};

export default Image;
