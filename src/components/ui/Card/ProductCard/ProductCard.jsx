import React, { useEffect, useState } from "react";
import {
  ActionContainer,
  ContentContainer,
  PriceLabel,
  ProductCardContainer,
  ProductTitle,
} from "./ProductCard.styles";
import Image from "../../Image/Image";
import Button from "../../Button/Button";
import Tag from "../../Tag/Tag";
import { useDispatch } from "react-redux";
import { addingItemCart } from "../../../../features/cart/cartSlice";
import { createSearchParams } from "react-router-dom";

const ProductCard = ({ item, buttonLabel }) => {
  const dispatch = useDispatch();
  const { productImage, productName ,productBrand} = item.product;

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
            <ActionContainer>
              <PriceLabel>L. {item.itemPrice}</PriceLabel>
              <Button onClick={addingItemHandle}>{buttonLabel}</Button>
            </ActionContainer>
          </ContentContainer>
        </ProductCardContainer>
      )}
    </>
  );
};

export default ProductCard;
