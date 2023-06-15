import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Features/ProductsSlice";

const Store = configureStore({
    reducer: ProductsSlice
})

export default Store