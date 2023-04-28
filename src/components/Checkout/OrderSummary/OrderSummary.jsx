import React, { useEffect, useState } from "react";
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
import OrderLabel from "./OrderLabel/OrderLabel";
import Divider from "../../ui/Divider/Divider";
import { formatPrice } from "../../../helpers/formatPrice";
import { hondurasCities } from "../../../data/hondurasCities";
import LoadingSpinner from "../../ui/LoadingSpinner/LoadingSpinner";

const OrderSummary = ({ delivery = 0.0, setValue, loading }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0.0);
  const [ivs, setIvs] = useState(0.0);
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

  useEffect(() => {
    const { totalPrice } = cart;
    let ivsOrderPrice = totalPrice * 0.15;
    let totalOrderPrice = totalPrice + ivsOrderPrice + delivery;
    setIvs(ivsOrderPrice);
    setTotalPrice(totalOrderPrice);
    setValue("items", cart.cartItems);
    setValue("total price", totalOrderPrice);
  }, [cart, delivery]);

  return (
    <FormCard title="Resumen de la Orden" h="984px" w="564px" p="0">
      <div className={classes.items}>
        {cart &&
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
      <div className={classes["price-container"]}>
        <OrderLabel label="Subtotal:" price={formatPrice(cart.totalPrice)} />
        <OrderLabel label="IVS:" price={formatPrice(ivs)} />
        <OrderLabel label="Envio:" price={formatPrice(delivery || 0.0)} />
        <Divider />
        <OrderLabel label="Total:" price={formatPrice(totalPrice)} />
        <div className={classes.actions}>
          <span onClick={exitHandler} className={classes["return-buying"]}>
            Continuar comprando
          </span>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <Button type="submit">CONTINUAR</Button>
          )}
        </div>
      </div>
    </FormCard>
  );
};

export default OrderSummary;
