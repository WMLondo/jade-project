import React from "react";
import {
  ContentContainer,
  ModalContainer,
  Price,
  QuickViewButton,
  Sku,
  Title,
  ExitIcon,
} from "./QuickViewModal.styles";
import { GrBasket } from "react-icons/gr";
import { useDispatch } from "react-redux";
import Image from "../../Image/Image";

const QuickViewModal = ({ item, addingToCartHandler, exitHandler }) => {
  const dispatch = useDispatch();
  const { productTitle, productPrice, productImage } = item.product;
  const { itemSku } = item;
  return (
    <ModalContainer>
      <Image
        width="290px"
        height="332px"
        borderRadius="12px"
        url={productImage}
      />
      <ContentContainer>
        <ExitIcon />
        <Title>{productTitle}</Title>
        <Sku>SKU: {itemSku || "00000"}</Sku>
        <Price>L. {productPrice || "00.00"}</Price>
        <QuickViewButton onClick={addingToCartHandler}>
          <GrBasket style={{ width: "16px", height: "16px" }} />
          Agregar Al Carrito
        </QuickViewButton>
      </ContentContainer>
    </ModalContainer>
  );
};

export default QuickViewModal;
