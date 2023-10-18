import image1 from "@/../public/img/product/micriphone.jpg";
import image2 from "@/../public/img/product/musicblank.jpg";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

type cartItem = {
  id: number;
  image: StaticImageData;
  productTitle: string;
  quantity: number;
  productPrice: number;
  subTotal: number;
};
type CartState = {
  cartItems: cartItem[];
  quantity: number;
};

type InitialState = {
  value: CartState;
};

const initialState: InitialState = {
  value: {
    cartItems: [
      {
        id: 54,
        image: image1,
        productTitle: "Microphone R4",
        quantity: 1,
        productPrice: 70,
        subTotal: 70,
      },
      {
        id: 542,
        image: image2,
        productTitle: "Microphone R4",
        quantity: 1,
        productPrice: 75,
        subTotal: 75,
      },
    ],
    quantity: 2,
  },
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartItem>) => {
      const newItem = action.payload;
      const existItem = state.value.cartItems.find((x) => x.id === newItem.id);

      if (!existItem) {
        newItem.quantity = 1;
        state.value.cartItems.push(newItem);
        state.value.quantity++;
      } else {
        existItem.quantity = (existItem.quantity || 0) + 1;
        state.value.quantity++;
      }
    },

    cartUpdate: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const updatedItem = state.value.cartItems.find((item) => item.id === id);
      if (updatedItem) {
        updatedItem.subTotal = updatedItem.quantity * updatedItem.productPrice;
      }
      return state;
    },

    increaseItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const updatedItem = state.value.cartItems.find((item) => item.id === id);
      if (updatedItem) {
        updatedItem.quantity = updatedItem.quantity + 1;
      }

      return state;
    },

    decreaseItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const updatedItem = state.value.cartItems.find((item) => item.id === id);
      if (updatedItem && updatedItem.quantity > 1) {
        updatedItem.quantity = updatedItem.quantity - 1;
      }

      return state;
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      const existItem = state.value.cartItems.find((item) => item.id === id);
      if (existItem) {
        const restItem = state.value.cartItems.filter((item) => item.id !== id);
        state.value.cartItems = [];
        state.value.cartItems.push(...restItem);
        state.value.quantity--;
      }

      return state;
    },
  },
});

export const { addToCart, cartUpdate, increaseItem, decreaseItem, removeItem } =
  cart.actions;
export default cart.reducer;
