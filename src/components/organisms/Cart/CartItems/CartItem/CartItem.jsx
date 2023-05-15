import {
  ItemContainer,
  ContentContainer,
  ItemTitle,
  ItemVariant,
  ActionContainer,
  DeleteItemOption,
  FlexColumn,
  TotalPrice,
  CartItemButton,
} from "./CartItem.styles";
import Field from "../../../../atoms/Input/Field/Field";
import Image from "../../../../atoms/Image/Image";
import { BsFillTrashFill } from "react-icons/bs";
import Divider from "../../../../atoms/Divider/Divider";

const CartItem = ({ cartItem, addHandler, reducingHandler, deleteHandler }) => {
  const { qty, totalPrice } = cartItem;
  const { productImage, productName } = cartItem.item.product;
  return (
    <>
      <ItemContainer>
        <Image
          width="104px"
          height="104px"
          borderRadius="12px"
          url={productImage}
          alt={productName}
        />
        <ContentContainer>
          <ItemTitle>{productName}</ItemTitle>
          <ItemVariant>
            {cartItem.item.itemVariants &&
              cartItem.item.itemVariants.map((variant) => {
                return <span>{variant.name} /</span>;
              })}
          </ItemVariant>
          <DeleteItemOption onClick={deleteHandler}>
            <BsFillTrashFill />
            Quitar
          </DeleteItemOption>
        </ContentContainer>
        <FlexColumn>
          <ActionContainer>
            <CartItemButton
              styles={{ width: "35px", height: "35px" }}
              onClick={reducingHandler}
            >
              -
            </CartItemButton>
            <Field
              width="35px"
              height="35px"
              textAlign="right"
              defaultValue={qty || "1"}
              readOnly
            />
            <CartItemButton
              styles={{ width: "35px", height: "35px" }}
              onClick={addHandler}
            >
              +
            </CartItemButton>
          </ActionContainer>
          <TotalPrice>L. {totalPrice.toFixed(2)}</TotalPrice>
        </FlexColumn>
      </ItemContainer>
      <Divider />
    </>
  );
};

export default CartItem;
