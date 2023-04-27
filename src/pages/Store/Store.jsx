import React, { useEffect } from "react";
import Products from "../../components/Store/Products/Products";
import classes from "./Store.module.css";
import ProductFilter from "../../components/Store/ProductFilter/ProductFilter";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initializeItems } from "../../features/items/itemsSlices";

const Store = () => {
  const items = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeItems(items));
  }, []);

  return (
    <main className={classes.store}>
      <Products />
    </main>
  );
};

export default Store;
