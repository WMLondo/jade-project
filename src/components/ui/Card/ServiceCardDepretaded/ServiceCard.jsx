import React from "react";
import {
  Paragraph,
  ServiceContainer,
  ServiceContentContainer,
  ServiceTagContainer,
  Title,
} from "./ServiceCard.styles";
import Tag from "../../Tag/Tag";
import Image from "../../Image/Image";
import Button from "../../Button/Button";

const ServiceCard = ({ imgUrl, title, tags, paragragh, imageAlt }) => {
  return (
    <ServiceContainer>
      <Image
        url={imgUrl}
        alt={imageAlt}
        width="100%"
        height="216px"
        borderRadius="12px 12px 0px 0px"
      />
      <ServiceContentContainer>
        <Title>{title}</Title>
        <ServiceTagContainer>
          {tags &&
            tags.map((tag) => {
              return <Tag key={tag.key}>{tag.title}</Tag>;
            })}
          <Tag>TRATAMIENTO DE SPA</Tag>
        </ServiceTagContainer>
        <Paragraph>{paragragh}</Paragraph>
        <Button style={{ alignSelf: "flex-end" }}>
          Aprender Mas sobre los Servicios
        </Button>
      </ServiceContentContainer>
    </ServiceContainer>
  );
};

export default ServiceCard;
