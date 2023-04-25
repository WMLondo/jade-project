import React from "react";
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
import RatingTag from "../../RatingTag/RatingTag";
import { useDispatch } from "react-redux";
import { addingItemCart } from "../../../../features/cart/cartSlice";
import useRandomHash from "../../../../hooks/useRandomHash";

const ProductCard = ({ item, buttonLabel }) => {
  const dispatch = useDispatch();
  const { productBrand, productName, productImage, productDescription } =
    item.product;
  const addingItemHandle = () => {
    const objectCartItem = {
      cartItemId: useRandomHash(11),
      item: item,
      qty: 1,
      totalPrice: item.itemPrice * 1,
    };
    dispatch(addingItemCart(objectCartItem));
  };
  return (
    <ProductCardContainer>
      <Image
        url={productImage}
        width="100%"
        height="202px"
        alt={productDescription}
        borderRadius="12px 12px 0px 0px"
      />
      <ContentContainer>
        <Tag>{productBrand}</Tag>
        <ProductTitle>{productName}</ProductTitle>
        <ActionContainer>
          <PriceLabel>L. {item.itemPrice}</PriceLabel>
          <Button onClick={addingItemHandle}>{buttonLabel}</Button>
        </ActionContainer>
      </ContentContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
