import { httpGetObject } from "../../utils/httpFirebase";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filterItems: [],
  isLoading: false,
  error: "",
};

export const initializeItems = createAsyncThunk(
  "items/initializeItems",
  async (payload, thunkApi) => {
    try {
      const array = [];
      for (const item of payload) {
        const productId = item.product;
        const product = await httpGetObject("products", productId);
        array.push({
          ...item,
          product: product,
        });
      }
      return array;
    } catch (error) {
      // Puedes dispatchear acciones sincrónicas en caso de error
      // utilizando thunkAPI.dispatch(...)
      throw new Error(error.message);
    }
  }
);

export const itemsSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    searchItems: (state, action) => {
      state.isLoading = true;
      const { query, sort } = action.payload;
      const filteredItems = [];
      for (const item of state.items) {
        if (
          query &&
          !item.product.productName.toLowerCase().includes(query.toLowerCase())
        ) {
          continue;
        }

        filteredItems.push(item);
      }
      state.filterItems = filteredItems.sort((prevItem, nextItem) => {
        const { productName } = prevItem.product;
        const { itemPrice } = prevItem;
        const { productName: nextProductName } = nextItem.product;
        const { itemPrice: nextItemPrice } = nextItem;

        switch (sort) {
          case "max_min_price":
            return nextItemPrice - itemPrice;

          case "min_max_price":
            return itemPrice - nextItemPrice;
          default:
            return productName.localeCompare(nextProductName);
        }
      });
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(initializeItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(initializeItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { searchItems } = itemsSlice.actions;

export default itemsSlice.reducer;
