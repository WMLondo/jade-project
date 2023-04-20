import { createSlice } from "@reduxjs/toolkit";
import useRandomHash from "../../hooks/useRandomHash";

const initialState = {
  cartId: "",
  items: [],
  totalPrice: 0.0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addingItemCart: (state, action) => {
      if (state.cartId === "") state.cartId = useRandomHash(11);
      const existingProductIndex = state.items.findIndex(
        (item) => item.itemId === action.payload.itemId
      );
      if (existingProductIndex != -1) {
        state.items[existingProductIndex].quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    deletingItemCart: (state, action) => {
      const existingProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );
      if (state.items[existingProductIndex].quantity > 0) {
        state.items[existingProductIndex].quantity -= 1;
      } else {
        state.items.splice(existingProductIndex, 1);
      }
    },
  },
});

export const { addingItemCart, deletingItemCart } = cartSlice.actions;

export default cartSlice.reducer;
