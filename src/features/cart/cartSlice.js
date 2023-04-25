import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartId: "",
  cartItems: [],
  totalPrice: 0.0,
  cartStatus: "",
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addingItemCart: (state, action) => {
      try {
        if (state.cartId === "") state.cartId = crypto.randomUUID();

        const existingProductIndex = state.cartItems.findIndex(
          (cartItem) => cartItem.item.itemId === action.payload.item.itemId
        );
        if (existingProductIndex != -1) {
          state.cartItems[existingProductIndex].qty += 1;
          state.cartItems[existingProductIndex].totalPrice =
            state.cartItems[existingProductIndex].item.itemPrice *
            state.cartItems[existingProductIndex].qty;
        } else {
          state.cartItems.push(action.payload);
        }
        state.totalPrice = 0.0;
        for (let cartItem in state.cartItems) {
          state.totalPrice += state.cartItems[cartItem].totalPrice;
        }
        state.cartStatus = `${action.payload.item.product.productName} se agrego a tu cesta`;
      } catch (e) {
        console.log(e);
        state.cartStatus =
          "Se produjo un error al reducir la cantidad de tu cesta";
      } finally {
        if (!state.isOpen) state.isOpen = !state.isOpen;
      }
    },
    reducingItemCart: (state, action) => {
      try {
        const existingProductIndex = state.cartItems.findIndex(
          (cartItem) => cartItem.item.itemId === action.payload.item.itemId
        );
        if (state.cartItems[existingProductIndex].qty > 1) {
          state.cartItems[existingProductIndex].qty -= 1;
          state.cartItems[existingProductIndex].totalPrice =
            state.cartItems[existingProductIndex].item.itemPrice *
            state.cartItems[existingProductIndex].qty;
          state.cartStatus = `${action.payload.item.product.productName} se redujo la cantidad de tu cesta`;
        } else {
          state.cartItems.splice(existingProductIndex, 1);
          state.cartStatus = `${action.payload.item.product.productName} se elimino de tu cesta`;
        }

        state.totalPrice = 0.0;
        for (let cartItem in state.cartItems) {
          state.totalPrice += state.cartItems[cartItem].totalPrice;
        }
      } catch (e) {
        console.log(e);
        state.cartStatus =
          "Se produjo un error al reducir la cantidad de tu cesta";
      } finally {
        if (!state.isOpen) state.isOpen = !state.isOpen;
      }
    },
    deletingItemCart: (state, action) => {
      try {
        const existingProductIndex = state.cartItems.findIndex(
          (cartItem) => cartItem.item.itemId === action.payload.item.itemId
        );
        if (existingProductIndex != -1) {
          state.cartItems.splice(existingProductIndex, 1);
          state.totalPrice = 0.0;
          for (let cartItem in state.cartItems) {
            state.totalPrice += state.cartItems[cartItem].totalPrice;
          }
        }
        state.cartStatus = `${action.payload.item.product.productName} ha sido eliminado de tu cesta`;
      } catch (e) {
        console.log(e);
        state.cartStatus =
          "Se produjo un error al eliminar el producto de tu cesta";
      } finally {
        if (!state.isOpen) state.isOpen = !state.isOpen;
      }
    },
    toggleCart: (state) => {
      state.cartStatus = "";
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  addingItemCart,
  reducingItemCart,
  deletingItemCart,
  toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;
