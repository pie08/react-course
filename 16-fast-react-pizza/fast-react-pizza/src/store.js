import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

const preloadedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  preloadedState,
});

export default store;

// Persisting state
store.subscribe(() => {
  const state = store.getState();
  const data = {
    ...state,
    user: {
      ...state.user,
      error: "",
      status: "",
    },
  };

  localStorage.setItem("reduxState", JSON.stringify(data));
});
