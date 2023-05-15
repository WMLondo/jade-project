import React from "react";
import { RatingContainer } from "./Rating.styles";
import { Stars } from "../../atoms/Stars/Stars";
import { RatingTag } from "../../atoms/RatingTag/RatingTag";

const Rating = ({ rate, userRatedCount }) => {
  return (
    <RatingContainer>
      <Stars rate={rate} w="16px" h="16px" />
      <RatingTag>({userRatedCount})</RatingTag>
    </RatingContainer>
  );
};

export default Rating;
