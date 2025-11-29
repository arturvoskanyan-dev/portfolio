import { configureStore } from "@reduxjs/toolkit";
import wallpaperReducer from "./slices/wallpaper/wallpaperSlice";

const store = configureStore({
    reducer: {
        wallpaper: wallpaperReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;