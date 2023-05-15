import React from "react";
import Tag from "../../../atoms/Tag/Tag";
import Image from "../../../atoms/Image/Image";
import Button from "../../../atoms/Button/StandardButton/StandardButton";
import {
  QuickViewCardContainer,
  Title,
  ContentContainer,
} from "./QuickViewCard.styles";

const QuickViewCard = (props) => {
  const { item, quickViewHandler, variant } = props;
  const { productImage, productBrand, productName } = item.product;
  let title = productName;

  if (productName.length > 34) {
    title = productName.substring(0, 31);
    title += "...";
  }

  return (
    <QuickViewCardContainer theme={variant}>
      <Image
        url={productImage}
        width="100%"
        height="150px"
        borderRadius="12px 12px 0px 0px"
      />
      <ContentContainer theme={variant}>
        <Tag
          url={`tienda/${productBrand.toLowerCase()}` || "/"}
          w="67px"
          h="auto"
        >
          {productBrand}
        </Tag>
        <Title>{title}</Title>
        <Button onClick={() => quickViewHandler(item)}>VISTA RAPIDA</Button>
      </ContentContainer>
    </QuickViewCardContainer>
  );
};

export default QuickViewCard;
