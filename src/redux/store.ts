import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import cartReducer from "./features/cart-slich";
import modalReducer from "./features/modalSlice";
import trackReducer from "./features/trackSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    track: trackReducer,
    customModal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
