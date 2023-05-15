import React from "react";

import { ImageContainer, ImageElement } from "./Image.styles";

const Image = (props) => {
  return (
    <ImageContainer br={props.borderRadius} w={props.width} h={props.height}>
      <ImageElement
        imgW={props.imgWidth}
        imgH={props.imgHeight}
        src={props.url}
        alt={props.alt}
      />
    </ImageContainer>
  );
};

export default Image;
