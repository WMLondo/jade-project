import React from "react";
import {
  ServiceCardContainer,
  ContentContainer,
  Title,
  Description,
  Image,
  ImageContainer,
} from "./ServiceCard.styles";

const ServiceCard = ({ title, description, imagePath }) => {
  return (
    <ServiceCardContainer>
      <ImageContainer>
        <Image src={imagePath} alt={title} />
      </ImageContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentContainer>
    </ServiceCardContainer>
  );
};

export default ServiceCard;
