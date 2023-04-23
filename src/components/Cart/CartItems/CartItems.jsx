import React from "react";
import CartItem from "./CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import {
  addingItemCart,
  reducingItemCart,
  deletingItemCart,
} from "../../../features/cart/cartSlice";
import useRandomHash from "../../../hooks/useRandomHash";
import classes from "./CartItems.module.css";
import Divider from "../../ui/Divider/Divider";
import PriceDescription from "../../ui/PriceDescription/PriceDescription";

const CartItems = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addingQtyCartItemHandler = (cartItem) => {
    dispatch(addingItemCart(cartItem));
  };

  const reducingQtyCartItemHandler = (cartItem) => {
    dispatch(reducingItemCart(cartItem));
  };

  const deletingCartItemHandler = (cartItem) => {
    dispatch(deletingItemCart(cartItem));
  };

  return (
    <div className={classes["cart-items"]}>
      <h3 className={classes.title}>Tu Cesta</h3>
      <Divider />
      <div className={classes["cart-item-container"]}>
        {cart.cartItems.map((cartItem) => {
          return (
            <CartItem
              key={useRandomHash(5)}
              cartItem={cartItem}
              addHandler={() => addingQtyCartItemHandler(cartItem)}
              reducingHandler={() => reducingQtyCartItemHandler(cartItem)}
              deleteHandler={() => deletingCartItemHandler(cartItem)}
            />
          );
        })}
      </div>
      <div className={classes["total-container"]}>
        <PriceDescription
          title="Subtotal:"
          description={`L. ${cart.totalPrice.toFixed(2)}`}
        />
        <PriceDescription
          title="IVS:"
          description="Se calculara durante el checkout"
        />
        <PriceDescription
          title="Envio:"
          description="Se calculara durante el checkout"
        />
      </div>
    </div>
  );
};

export default CartItems;
