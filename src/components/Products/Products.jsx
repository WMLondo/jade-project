import React from "react";
import classes from "./Products.module.css";
import ComboBox from "../ui/Input/ComboBox/ComboBox";
import ProductCard from "../ui/Card/ProductCard/ProductCard";
import { DUMMYPRODUCTS } from "../../data/DummyProduct";
import { SORTOPTIONPRODUCT } from "../../data/SortOptionProduct/SortOptionProduct";

const Products = ({}) => {
  let content = <h3>No existen productos disponibles</h3>;

  if (DUMMYPRODUCTS.length > 0) {
    content = DUMMYPRODUCTS.map((item) => {
      return (
        <ProductCard key={item.itemId} item={item} buttonLabel="AGREGAR" />
      );
    });
  }

  return (
    <section className={classes.products}>
      <div className={classes.header}>
        <h2>9,999 resultados para “producto”</h2>
        <ComboBox options={SORTOPTIONPRODUCT} />
      </div>
      <div className={classes["products-container"]}>{content}</div>
    </section>
  );
};

export default Products;
