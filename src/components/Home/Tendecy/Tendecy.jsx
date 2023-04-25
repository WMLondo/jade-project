import React from "react";
import classes from "./Tendecy.module.css";
import { QuickViewCardBgDark } from "../../ui/Card/QuickViewCard/QuickViewCard";
import { DUMMYPRODUCTS } from "../../../data/DummyProduct";

const Tendecy = () => {
  return (
    <section className={classes.tendecy}>
      <h2 className={classes.title}>Lo ultimo en cuidado de la piel</h2>
      <div className={classes.options}>
        {DUMMYPRODUCTS.map((item) => {
          return (
            <QuickViewCardBgDark key={item.itemId} product={item.product} />
          );
        })}
      </div>
    </section>
  );
};

export default Tendecy;
