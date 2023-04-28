import React from "react";
import CartItems from "./CartItems/CartItems";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import classes from "./Cart.module.css";
import { IoBagCheckOutline } from "react-icons/io5";

const Cart = React.forwardRef(({ title, exitHandler }, ref) => {
  const navigate = useNavigate();

  return (
    <div className={classes.cart} ref={ref}>
      <div className={classes.header}>
        <h2 className={classes.title}>
          {title || "¡Encuentra tus productos favoritos y haz tu compra!"}
        </h2>
      </div>
      <CartItems />
      <div className={classes.footer}>
        <span onClick={exitHandler} className={classes["return-buying"]}>
          Continuar comprando
        </span>
        <Button onClick={() => navigate("/checkout")}>
          CHECKOUT
          <IoBagCheckOutline width="24px" />
        </Button>
      </div>
    </div>
  );
});

export default Cart;
