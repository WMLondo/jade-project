import React, { useState, useEffect } from "react";
import QuickViewCard from "../../ui/Card/QuickViewCard/QuickViewCard";
import classes from "./LastAddedItems.module.css";
import QuickViewModal from "../../ui/Overlay/QuickViewModal/QuickViewModal";
import Overlay from "../../ui/Overlay/Overlay";
import LoadingSpinner from "../../ui/LoadingSpinner/LoadingSpinner";
import useHttp from "../../../hooks/useHttp";
import { httpGetObject } from "../../../utils/http-firebase";
import { useDispatch } from "react-redux";
import { addingItemCart } from "../../../features/cart/cartSlice";

const LastAddedItems = () => {
  const { data, isLoading, error } = useHttp("items");
  const [newItems, setNewItems] = useState([]);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const dispatch = useDispatch();

  const openQuickViewModal = (item) => {
    if (quickViewItem !== null) {
      setQuickViewItem(null);
    }
    setIsQuickViewOpen((isOpen) => !isOpen);
    setQuickViewItem(item);
  };

  const addingToCartHandler = () => {
    setIsQuickViewOpen((isOpen) => !isOpen);
    if (quickViewItem !== null) {
      const objectCartItem = {
        cartItemId: crypto.randomUUID(),
        item: quickViewItem,
        qty: 1,
        totalPrice: quickViewItem.itemPrice * 1,
      };
      dispatch(addingItemCart(objectCartItem));
    }
  };

  const getNewItems = async () => {
    const mergeItemsWithProduct = [];
    for (const item of data) {
      const productId = item.product;
      const product = await httpGetObject("products", productId);
      mergeItemsWithProduct.push({
        ...item,
        product: product,
      });
    }
    const filterNewItems = mergeItemsWithProduct
      .filter((item) => {
        const newCategory = item.product.productCategories.find((category) => {
          return category.name === "new" && category.value === true;
        });
        return newCategory !== undefined;
      })
      .reverse()
      .slice(0, 5);
    setNewItems(filterNewItems);
  };

  useEffect(() => {
    getNewItems();
  }, [isLoading === false]);

  return (
    <section className={classes["last-items"]}>
      <h2 className={classes.title}>
        ¡Explora las novedades en nuestro catálogo!
      </h2>
      <div className={classes.options}>
        <Overlay isOpen={isQuickViewOpen}>
          <QuickViewModal
            item={quickViewItem}
            exitHandler={() => {
              setIsQuickViewOpen((isOpen) => !isOpen);
            }}
            addingHandler={addingToCartHandler}
          />
        </Overlay>
        {isLoading && <LoadingSpinner />}
        {newItems.map((item) => {
          return (
            <QuickViewCard
              key={item.itemId}
              item={item}
              quickViewHandler={openQuickViewModal}
            />
          );
        })}
      </div>
    </section>
  );
};

export default LastAddedItems;
