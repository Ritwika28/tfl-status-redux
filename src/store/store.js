import { configureStore } from "@reduxjs/toolkit";
import statusSlice from "./features/statusSlice";

const store = configureStore({
    reducer: {
        status: statusSlice.reducer
    }
});

export default store;