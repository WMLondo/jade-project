import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../Cart/CartItems/CartItem/CartItem";
import {
  addingItemCart,
  deletingItemCart,
  reducingItemCart,
} from "../../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import classes from "./OrderSummary.module.css";
import FormCard from "../FormCard/FormCard";

const OrderSummary = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addingQtyCartItemHandler = (cartItem) => {
    dispatch(addingItemCart(cartItem));
  };

  const reducingQtyCartItemHandler = (cartItem) => {
    dispatch(reducingItemCart(cartItem));
  };

  const deletingCartItemHandler = (cartItem) => {
    dispatch(deletingItemCart(cartItem));
  };

  const exitHandler = () => {
    navigate("/tienda");
  };

  return (
    <FormCard title="Resumen de la Orden" h="984px" w="564px">
      <div className={classes["product-container"]}>
        {cart.cartItems &&
          cart.cartItems.map((cartItem) => {
            return (
              <CartItem
                key={crypto.randomUUID()}
                cartItem={cartItem}
                addHandler={() => addingQtyCartItemHandler(cartItem)}
                reducingHandler={() => reducingQtyCartItemHandler(cartItem)}
                deleteHandler={() => deletingCartItemHandler(cartItem)}
              />
            );
          })}
      </div>
      <div className={classes["result-container"]}>
        <div className={classes.result}>
          <strong></strong>
          <span></span>
        </div>
        <span onClick={exitHandler} className={classes["return-buying"]}>
          Continuar comprando
        </span>
        <Button type="submit">CONTINUAR</Button>
      </div>
    </FormCard>
  );
};

export default OrderSummary;
