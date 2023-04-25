import React from "react";
import {
  ContentContainer,
  ModalContainer,
  Price,
  Sku,
  Title,
  ExitIcon,
} from "./QuickViewModal.styles";
import Button from "../../Button/Button";
import { BsBasket2 } from "react-icons/bs";

import Image from "../../Image/Image";

const QuickViewModal = ({ item, addingHandler, exitHandler }) => {
  const { productName, productImage } = item.product;
  const { itemSku, itemPrice } = item;
  return (
    <ModalContainer>
      <Image
        width="290px"
        height="cal(100% - 32px)"
        borderRadius="12px"
        url={productImage}
      />
      <ContentContainer>
        <ExitIcon onClick={exitHandler} />
        <Title>{productName}</Title>
        <Sku>SKU: {itemSku || "00000"}</Sku>
        <Price>L. {itemPrice || "00.00"}</Price>
        <Button
          onClick={addingHandler}
          style={{
            width: "100%",
            height: "54px",
            gap: "8px",
            color: "var(--neutral-color-max)",
            fontSize: "var(--font-size-l)",
          }}
        >
          <BsBasket2
            style={{
              width: "var(--font-size-l)",
              height: "var(--font-size-l)",
            }}
          />
          Agregar Al Carrito
        </Button>
      </ContentContainer>
    </ModalContainer>
  );
};

export default QuickViewModal;
