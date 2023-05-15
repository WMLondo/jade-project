import React from "react";
import {
  ContentContainer,
  ModalContainer,
  Price,
  Sku,
  Title,
  ExitIcon,
} from "./QuickViewModal.styles";
import Button from "../../../atoms/Button/StandardButton/StandardButton";
import { BsBasket2 } from "react-icons/bs";
import Image from "../../../atoms/Image/Image";

const QuickViewModal = (props) => {
  const { item, addingHandler, exitHandler } = props;
  const { productName, productImage } = item.product;
  const { itemSku, itemPrice } = item;
  return (
    <ModalContainer>
      <Image
        width="290px"
        height="290px"
        borderRadius="12px"
        url={productImage}
      />
      <ContentContainer>
        <ExitIcon onClick={exitHandler} />
        <Title>{productName}</Title>
        <Sku>SKU: {itemSku || "00000"}</Sku>
        <Price>L. {itemPrice || "00.00"}</Price>
        <Button onClick={addingHandler} w="100%">
          <BsBasket2
            style={{
              width: "20px",
              height: "20px",
            }}
          />
          Agregar Al Carrito
        </Button>
      </ContentContainer>
    </ModalContainer>
  );
};

export default QuickViewModal;
