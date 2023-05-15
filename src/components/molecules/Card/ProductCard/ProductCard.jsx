import React from "react";
import {
  ActionContainer,
  ContentContainer,
  PriceLabel,
  ProductCardContainer,
  ProductTitle,
} from "./ProductCard.styles";
import Image from "../../../atoms/Image/Image";
import Button from "../../../atoms/Button/StandardButton/StandardButton";
import Tag from "../../../atoms/Tag/Tag";
import { createSearchParams } from "react-router-dom";
import Rating from "../../Rating/Rating";

const ProductCard = (props) => {
  const { item, buttonLabel, onClickHandler, rate } = props;
  const { productImage, productName, productBrand } = item.product;

  const addingItemHandle = () => {
    const objectCartItem = {
      cartItemId: crypto.randomUUID(),
      item: item,
      qty: 1,
      totalPrice: item.itemPrice * 1,
    };
    dispatch(addingItemCart(objectCartItem));
  };

  return (
    <>
      {item && (
        <ProductCardContainer>
          <Image
            url={productImage}
            width="100%"
            height="202px"
            alt={productName}
            borderRadius="12px 12px 0px 0px"
          />
          <ContentContainer>
            <Tag
              url={{
                pathname: "tienda",
                search: createSearchParams({
                  query: productBrand.toLowerCase(),
                }).toString(),
              }}
            >
              {productBrand}
            </Tag>
            <ProductTitle>{productName}</ProductTitle>
            <Rating rate={rate.itemRate} userRatedCount={rate.userCount} />
            <ActionContainer>
              <PriceLabel>L. {item.itemPrice}</PriceLabel>
              <Button onClick={onClickHandler}>{buttonLabel}</Button>
            </ActionContainer>
          </ContentContainer>
        </ProductCardContainer>
      )}
    </>
  );
};

export default ProductCard;
