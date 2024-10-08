import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./useSlice";

export default configureStore({
    reducer: {
        userdata: useReducer,
    },
})