import React, { useState } from "react";
import Products from "../../components/Products/Products";
import classes from "./Store.module.css";
import ProductFilter from "../../components/ProductFilter/ProductFilter";
import Overlay from "../../components/ui/Overlay/Overlay";
import Cart from "../../components/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../features/cart/cartSlice";

//todo
//work in the product filter

const Store = () => {
  const cartStatus = useSelector((state) => state.cart.cartStatus);
  const cartIsOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();

  return (
    <main className={classes.store}>
      {/*<ProductFilter />*/}
      <Overlay isOpen={cartIsOpen} justifyContent="flex-end">
        <Cart title={cartStatus} exitHandler={() => dispatch(toggleCart())} />
      </Overlay>
      <Products />
    </main>
  );
};

export default Store;
