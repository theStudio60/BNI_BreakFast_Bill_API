import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import productReducer from "./features/products";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: { user: userReducer },
});
export default store;
