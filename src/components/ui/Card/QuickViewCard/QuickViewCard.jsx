import React from "react";
import Tag from "../../Tag/Tag";
import Image from "../../Image/Image";
import Button from "../../Button/Button";
import {
  QuickViewCardContainer,
  QuickViewCardContainerBgDark,
  Title,
  ContentContainer,
  ContentContainerBgDark,
} from "./QuickViewCard.styles";

const QuickViewCard = ({ product, quickViewHandler }) => {
  const { productImage, productBrand, productName } = product;
  let title = productName;

  if (productName.length > 34) {
    title = productName.substring(0, 31);
    title += "...";
  }

  return (
    <QuickViewCardContainer>
      <Image
        url={productImage}
        width="100%"
        height="150px"
        borderRadius="12px 12px 0px 0px"
      />
      <ContentContainer>
        <Tag
          url={`tienda/${productBrand.toLowerCase()}` || "/"}
          w="67px"
          h="auto"
        >
          {productBrand}
        </Tag>
        <Title>{title}</Title>
        <Button onClick={quickViewHandler}>VISTA RAPIDA</Button>
      </ContentContainer>
    </QuickViewCardContainer>
  );
};

export const QuickViewCardBgDark = ({ product, quickViewHandler }) => {
  const { productImage, productBrand, productName } = product;
  let title = productName;

  if (productName.length > 34) {
    title = productName.substring(0, 31);
    title += "...";
  }
  return (
    <QuickViewCardContainerBgDark>
      <Image
        url={productImage}
        width="100%"
        height="150px"
        borderRadius="12px 12px 0px 0px"
      />
      <ContentContainerBgDark>
        <Tag
          url={`tienda/${productBrand.toLowerCase()}` || "/"}
          w="67px"
          h="auto"
        >
          {productBrand}
        </Tag>
        <Title>{title}</Title>
        <Button onClick={quickViewHandler}>VISTA RAPIDA</Button>
      </ContentContainerBgDark>
    </QuickViewCardContainerBgDark>
  );
};

export default QuickViewCard;
