import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantSlice";


const store = configureStore({
    reducer:{
        restaurantSlice
    }
})

export default store