import React, { useEffect } from "react";
import Products from "../../components/Store/Products/Products";
import classes from "./Store.module.css";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initializeItems } from "../../features/items/itemsSlices";

const Store = () => {
  const items = useLoaderData();
  const dispatch = useDispatch();

  //Si component se llamo
  useEffect(() => {
    //almacenamiento en memoria
    dispatch(initializeItems(items));
  }, []);

  return (
    <main className={classes.store}>
      <Products />
    </main>
  );
};

export default Store;
