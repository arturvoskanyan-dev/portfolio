import { configureStore } from "@reduxjs/toolkit";
import wallpaperReducer from "./slices/wallpaper/wallpaperSlice";
import windowsSlice from "./slices/windows/windowsSlice";

const store = configureStore({
    reducer: {
        wallpaper: wallpaperReducer,
        windows: windowsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;