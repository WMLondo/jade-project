import React from "react";
import Products from "../../components/Store/Products/Products";
import classes from "./Store.module.css";
import ProductFilter from "../../components/Store/ProductFilter/ProductFilter";

//todo
//work in the product filter

const Store = () => {
  return (
    <main className={classes.store}>
      {/*<ProductFilter />*/}

      <Products />
    </main>
  );
};

export default Store;
