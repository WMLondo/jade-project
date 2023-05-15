import React, { useEffect } from "react";
import classes from "./Products.module.css";
import ProductCard from "../../ui/Card/ProductCard/ProductCard";
import LoadingSpinner from "../../ui/LoadingSpinner/LoadingSpinner";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useQuery from "../../../../../hooks/use-query";
import { sortOptionsProduct } from "../../../../../data/sortOptionsProduct";
const Products = ({}) => {
  const { isResult, filteredItems } = useQuery();
  const isLoading = useSelector((state) => state.items.isLoading);
  const [searchParams, setSearchParams] = useSearchParams();
  let content = (
    <h3 className={classes["no-existing-title"]}>
      Parece ser que no existe algun producto con ese nombre
    </h3>
  );

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  if (isResult && filteredItems.length > 0) {
    content = (
      <div className={classes["products-container"]}>
        {filteredItems.map((item) => {
          return (
            <ProductCard key={item.itemId} item={item} buttonLabel="AGREGAR" />
          );
        })}
      </div>
    );
  }

  const onChangeSortHandler = (sortValue) => {
    searchParams.set("sort", sortValue);
    setSearchParams(searchParams);
  };

  return (
    <section className={classes.products}>
      <div className={classes.header}>
        <h2>
          {filteredItems.length} resultados
          {searchParams.get("query") && ` para "${searchParams.get("query")}"`}
        </h2>
        <ComboBox
          id="sortBy"
          options={sortOptionsProduct}
          onChange={onChangeSortHandler}
        />
      </div>
      <div className={classes.body}>{content}</div>
    </section>
  );
};

export default Products;
