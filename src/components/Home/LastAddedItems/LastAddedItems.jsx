import React, { useState } from "react";
import QuickViewCard from "../../ui/Card/QuickViewCard/QuickViewCard";
import classes from "./LastAddedItems.module.css";
import { DUMMYPRODUCTS } from "../../../data/DummyProduct";
import QuickViewModal from "../../ui/Overlay/QuickViewModal/QuickViewModal";
import Overlay from "../../ui/Overlay/Overlay";

const LastAddedItems = () => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const getItemHandler = (product) => {
    const existingItem = DUMMYPRODUCTS
  };

  return (
    <section className={classes["last-items"]}>
      <h2 className={classes.title}>Lo ultimo en cuidado de la piel</h2>
      <div className={classes.options}>
        <Overlay isOpen={isQuickViewOpen}>
          <QuickViewModal />
        </Overlay>
        {DUMMYPRODUCTS.map((item) => {
          return <QuickViewCard key={item.itemId} product={item.product} />;
        })}
      </div>
    </section>
  );
};

export default LastAddedItems;
